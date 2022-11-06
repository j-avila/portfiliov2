import React from "react"
import { If, useLocalStorage } from "react-haiku"
import Menu from "../../components/common/Menu"
import ProjectCard from "../../components/Porfolio/ProjectCard"
import { Iproject } from "../../components/Porfolio/types"
import { Iuser } from "../../components/types"
import { useData } from "../../hooks/useData"

import * as St from "./Admin.styles"

interface IResp {
  loading: boolean | null
  data: any
  setRefetch: any
}

const Admin = () => {
  const apiURL = `${process.env.REACT_APP_PORTFOLIO_API}/projects`
  const { loading, data, setRefetch }: IResp = useData(apiURL)
  const [session] = useLocalStorage<Iuser>("session")

  const handleDelete = (id: string) => {
    console.log(id)
    fetch(`${apiURL}?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${session.user.token}`,
      },
    })
      .then((data) => {
        console.log(data.ok)
        setRefetch(true)
      })
      .catch((err) => {
        console.log(err)
        alert(err.error.message)
      })
  }

  return (
    <>
      <Menu />
      <St.Head>
        <h1>Admin</h1>
      </St.Head>
      <St.GridList isLoading={loading}>
        <If isTrue={loading}>loading</If>
        <If isTrue={data?.projects?.length >= 1}>
          {data?.projects?.map((item: Iproject) => (
            <ProjectCard
              key={item._id}
              data={item}
              handleDelete={handleDelete}
              isEdit
            />
          ))}
        </If>
        <If isTrue={data?.projects?.length <= 0}>nothing to show</If>
      </St.GridList>
    </>
  )
}

export default Admin
