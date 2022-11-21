import React from "react"
import About from "../../components/About"
import Contact from "../../components/Contact"
import Cover from "../../components/Cover"
import Head from "../../components/Head"
import { Portfolio } from "../../components/Porfolio"
import { useData } from "../../hooks/useData"
import { Homepage } from "./HomePage.styles"

const githubApi = process.env.REACT_APP_GITHUB_API
const dribbbleApi = process.env.REACT_APP_DRIBBBLE_API
const projectsApi = process.env.REACT_APP_PORTFOLIO_API
const token = process.env.REACT_APP_DRIBBBLE_TOKEN

const HomePage = () => {
  const ghData = useData(`${githubApi}`)
  const dribbbleData = useData(`${dribbbleApi}?access_token=${token}`)
  const projectsData = useData(`${projectsApi}/projects`)

  return (
    <Homepage>
      <Head />
      <Cover />
      <About />
      <Portfolio
        githubData={ghData.data}
        dribbbleData={dribbbleData.data}
        projectsData={projectsData?.data?.projects}
        loading={ghData.loading || dribbbleData.loading || projectsData.loading}
      />
      <Contact />
    </Homepage>
  )
}

export default HomePage
