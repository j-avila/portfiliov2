import React from "react"
import Contact from "../../components/Contact"
import Cover from "../../components/Cover"
import Head from "../../components/Head"
import { Portfolio } from "../../components/Porfolio"
import Slider from "../../components/Slider"
import { Homepage } from "./HomePage.styles"

const HomePage = () => {
  return (
    <Homepage>
      <Head />
      <Cover />
      <Slider />
      <Portfolio />
      <Contact />
    </Homepage>
  )
}

export default HomePage
