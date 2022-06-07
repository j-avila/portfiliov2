import React from "react"
import Contact from "../../components/Contact"
import Cover from "../../components/Cover"
import Head from "../../components/Head"
import { Portfolio } from "../../components/Porfolio"
import Slider from "../../components/Slider"
import { useData } from "../../hooks/useData"
import { Homepage } from "./HomePage.styles"

const githubApi = process.env.REACT_APP_GITHUB_API
const dribbbleApi = process.env.REACT_APP_DRIBBBLE_API
const token = process.env.REACT_APP_DRIBBBLE_TOKEN

const HomePage = () => {
  const ghData = useData(`${githubApi}`)
  const dribbbleData = useData(`${dribbbleApi}`, {
    headers: { Authorization: token },
  })

  return (
    <Homepage>
      <Head />
      <Cover />
      <Slider />
      <Portfolio githubData={ghData.data} dribbbleData={dribbbleData.data} />
      <Contact />
    </Homepage>
  )
}

export default HomePage
