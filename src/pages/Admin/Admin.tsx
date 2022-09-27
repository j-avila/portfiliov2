import React, { useEffect } from "react"
import { If } from "react-haiku"
import Menu from "../../components/common/Menu"
import { useData } from "../../hooks/useData"

import * as St from "./Admin.styles"

interface Iproject {
  name: string
  description: string
  thumbnail: string
  link: string
  repo: string
  tags: [string]
}

interface IResp {
  loading: boolean | null
  data: any
}

const Admin = () => {
  const apiURL = `${process.env.REACT_APP_PORTFOLIO_API}/projects`
  const { loading, data }: IResp = useData(apiURL)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <Menu />
      <St.Head>
        <h1>Admin</h1>
      </St.Head>
      <If isTrue={loading}>loading</If>
      <If isTrue={data?.projects?.length >= 1}>
        {data?.projects?.map((item: Iproject) => (
          //TODO: create the cards for show the projects on admin
          <p>{item.name}</p>
        ))}
      </If>
      <If isTrue={data?.projects?.length <= 0}>nothing to show</If>
    </>
  )
}

export default Admin
