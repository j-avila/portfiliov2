import React, { useEffect } from "react"
import Contact from "../../components/Contact"
import Cover from "../../components/Cover"
import Head from "../../components/Head"
import { Portfolio } from "../../components/Porfolio"
import Slider from "../../components/Slider"
import { useData } from "../../hooks/useData"
import { Homepage } from "./HomePage.styles"

const githubDApi = process.env.REACT_APP_GITHUB_API
const figmaApi = process.env.REACT_APP_FIGMA_API
const token = process.env.REACT_APP_FIGMA_TOKEN

const HomePage = () => {
  const ghData = useData(`${githubDApi}`)
  const figmaData = useData(`${figmaApi}/me/`, {
    headers: { "X-Figma-Token": token },
  })

  return (
    <Homepage>
      <Head />
      <Cover />
      <Slider />
      <Portfolio githubData={ghData.data} />
      <Contact />
    </Homepage>
  )
}

export default HomePage
