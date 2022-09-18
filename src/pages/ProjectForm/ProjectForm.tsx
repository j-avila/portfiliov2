import React, { FormEvent, useEffect, useState } from "react"
import { If } from "react-haiku"
import { useTranslation } from "react-i18next"
import Button from "../../components/common/Button"
import theme from "../../config/theme"
import * as St from "./ProjectForm.styles"

interface IForm {
  name: string | undefined
  link: string | undefined
  repo: string | undefined
  description?: string
  thumbnail: File | null
}

const defaultState = {
  name: undefined,
  link: undefined,
  repo: undefined,
  description: undefined,
  thumbnail: null,
}

const imageMimeType = /image\/(png|jpg|jpeg)/i

const ProjectForm = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState<IForm>(defaultState)
  const [preview, setPreview] = useState()

  const handleImage = (e: FormEvent) => {
    const file = (e.target as HTMLInputElement).files![0]

    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid")
      return
    }
    setForm({ ...form, thumbnail: file })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("project", form)
  }

  useEffect(() => {
    let fileReader: any,
      isCancel = false
    if (form.thumbnail) {
      fileReader = new FileReader()
      fileReader.onload = (e: any) => {
        const { result } = e.target
        if (result && !isCancel) {
          setPreview(result)
        }
      }
      fileReader.readAsDataURL(form.thumbnail)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [form.thumbnail])

  return (
    <St.Wrapper>
      <h1>{t("admin.title")}</h1>
      <St.Form onSubmit={(e) => handleSubmit(e)}>
        <St.InputField>
          <label>{t("admin.name")}</label>
          <input
            name="name"
            type="text"
            onChange={({ target }) => setForm({ ...form, name: target.value })}
          />
        </St.InputField>
        <St.InputField>
          <label>{t("admin.link")}</label>
          <input
            name="link"
            type="text"
            onChange={({ target }) => setForm({ ...form, link: target.value })}
          />
        </St.InputField>
        <St.InputField>
          <label>{t("admin.repo")}</label>
          <input
            name="repo"
            type="text"
            onChange={({ target }) => setForm({ ...form, repo: target.value })}
          />
        </St.InputField>
        <St.InputField>
          <label>{t("admin.thumbnail")}</label>
          <input
            name="thumbnail"
            type="file"
            accept="image/*"
            onChange={(e) => handleImage(e)}
          />
          <If isTrue={form?.thumbnail ? true : false}>
            <St.ThumbCard>
              <i
                className="fa-solid fa-circle-xmark remove"
                onClick={() => {
                  setPreview(undefined)
                  setForm({ ...form, thumbnail: null })
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
            onChange={({ target }) =>
              setForm({ ...form, description: target.value })
            }
          />
        </St.InputField>

        <Button
          type="submit"
          content={t("admin.send")}
          color={theme.colors.accent}
        />
      </St.Form>
    </St.Wrapper>
  )
}

export default ProjectForm
