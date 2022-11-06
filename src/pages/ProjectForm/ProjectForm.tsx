/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useEffect, useState } from "react"
import { If, useLocalStorage } from "react-haiku"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import BadgeInput from "../../components/common/BadgeInput"
import Button from "../../components/common/Button"
import Menu from "../../components/common/Menu"
import { Iuser } from "../../components/types"
import theme from "../../config/theme"
import { useData } from "../../hooks/useData"

import * as St from "./ProjectForm.styles"

interface IForm {
  name?: string
  link?: string
  repo?: string
  description?: string
  image?: any
  tags?: string[]
}

interface IResp {
  loading: boolean | null
  data: any
}

const imageMimeType = /image\/(png|jpg|jpeg)/i

const ProjectForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form, setForm] = useState<IForm>({
    name: "",
    link: "",
    repo: "",
    description: "",
    image: null,
    tags: [],
  })
  const [tags, setTags] = useState<string[]>([])
  const [preview, setPreview] = useState()
  const [loading, setLoading] = useState(false)
  const [session] = useLocalStorage<Iuser>("session")
  let { id } = useParams()
  const apiURL = `${process.env.REACT_APP_PORTFOLIO_API}/projects/${id}`
  const { loading: loadingProject, data: projectData }: IResp = useData(apiURL)

  const handleImage = (e: FormEvent) => {
    const file = (e.target as HTMLInputElement).files![0]

    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid")
      return
    }
    setForm({ ...form, image: file })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    let formData = new FormData()
    const apiUrl = process.env.REACT_APP_PORTFOLIO_API

    for (var key in form) {
      formData.append(key, form[key as keyof IForm]!)
    }

    fetch(`${apiUrl}/projects`, {
      method: `${id ? "PATCH" : "POST"}`,
      headers: {
        Authorization: `${session.user.token}`,
      },
      body: formData,
    })
      .then(() => {
        setLoading(false)
        navigate("/admin")
      })
      .catch((err) => {
        console.log(err)
        alert(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    let fileReader: any,
      isCancel = false
    if (form?.image) {
      fileReader = new FileReader()
      fileReader.onload = (e: any) => {
        const { result } = e.target
        if (result && !isCancel) {
          setPreview(result)
        }
      }
      fileReader.readAsDataURL(form.image)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [form?.image])

  useEffect(() => {
    if (projectData?.ok) {
      const { name, link, repo, description, image, tags } = projectData.project
      const newState = {
        id: id,
        name: name,
        link: link,
        repo: repo,
        description: description,
        tags: tags,
      }
      setTags(tags)
      setPreview(image)
      setForm(newState)
    }
  }, [projectData, id])

  useEffect(() => {
    setForm({ ...form, tags: tags })
  }, [tags])

  return (
    <>
      <Menu />
      <St.Wrapper>
        <h1>{t("admin.title")}</h1>
        <If isTrue={loadingProject}>loading...</If>
        <St.Form onSubmit={(e) => handleSubmit(e)}>
          <St.InputField>
            <label>{t("admin.name")}</label>
            <input
              name="name"
              type="text"
              value={form?.name}
              onChange={({ target }) =>
                setForm({ ...form, name: target.value })
              }
            />
          </St.InputField>
          <St.InputField>
            <label>{t("admin.link")}</label>
            <input
              name="link"
              type="text"
              value={form.link}
              onChange={({ target }) =>
                setForm({ ...form, link: target.value })
              }
            />
          </St.InputField>
          <St.InputField>
            <label>{t("admin.repo")}</label>
            <input
              name="repo"
              value={form.repo}
              type="text"
              onChange={({ target }) =>
                setForm({ ...form, repo: target.value })
              }
            />
          </St.InputField>
          <St.InputField>
            <label>{t("admin.image")}</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <If isTrue={preview ? true : false}>
              <St.ThumbCard>
                <i
                  className="fa-solid fa-circle-xmark remove"
                  onClick={() => {
                    setPreview(undefined)
                    setForm({ ...form, image: undefined })
                  }}
                />
                <span>
                  <img src={preview} alt="preview" />
                </span>
              </St.ThumbCard>
            </If>
          </St.InputField>
          <St.InputField>
            <label>{t("admin.description")}</label>
            <textarea
              name="description"
              cols={24}
              rows={6}
              value={form.description}
              onChange={({ target }) =>
                setForm({ ...form, description: target.value })
              }
            />
          </St.InputField>
          <BadgeInput tags={tags || ["uno", "dos"]} tagHandler={setTags} />
          <Button
            type="submit"
            disabled={loading}
            content={
              loading ? (
                <i className="fa-solid fa-circle-notch fa-spin spinner" />
              ) : (
                t("admin.send")
              )
            }
            color={theme.colors.accent}
          />
        </St.Form>
      </St.Wrapper>
    </>
  )
}

export default ProjectForm
