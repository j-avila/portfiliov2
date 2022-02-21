import React from "react"
import { useTranslation } from "react-i18next"
import Card from "./Card"
import { Wrapper, PortWrapper } from "./Portfolio.styles"
import { CardProps } from "./types"

const Portfolio = () => {
  const { t } = useTranslation()
  const jobs: CardProps[] = [
    {
      id: 1,
      title: "test",
      desc: "testeo intenso",
      link: "http://www.google.com",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "test",
      desc: "testeo intenso",
      link: "http://www.google.com",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "test",
      desc: "testeo intenso",
      link: "http://www.google.com",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ]

  return (
    <Wrapper>
      <div className="bio">
        <h1>{t("bio.title")}</h1>
        <p>{t("bio.desc")}</p>
        <p>{t("bio.techs")}</p>
      </div>
      <PortWrapper>
        <h1>{t("bio.works")}</h1>
        <div className="portwrapper">
          {jobs?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </PortWrapper>
    </Wrapper>
  )
}

export default Portfolio
