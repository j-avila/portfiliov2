import React from "react"
import { If } from "react-haiku"
import { useData } from "../../hooks/useData"

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

  return (
    <div>
      <h1>Admin</h1>
      <If isTrue={loading}>loading</If>
      <If isTrue={data?.projects?.length >= 1}>
        {data?.projects?.map((item: Iproject) => (
          <p>item.name</p>
        ))}
      </If>
      <If isTrue={data?.projects?.length <= 0}>nothing to show</If>
    </div>
  )
}

export default Admin
