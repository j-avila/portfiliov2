import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { formatGhCard } from "../../utils/helplers"
import GithubCard from "./GithubCard"
import { Wrapper, PortWrapper } from "./Portfolio.styles"
import { GithubcardProps, PortfolioProps } from "./types"

const Portfolio = ({ githubData }: PortfolioProps) => {
  const { t } = useTranslation()
  const [repos, setRepoCards] = useState([] as GithubcardProps[])
  // const [figma, setFigmaCards] = useState()

  useEffect(() => {
    githubData?.length && setRepoCards(formatGhCard(githubData))
  }, [githubData])

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
          {repos?.map((item: GithubcardProps) => (
            <GithubCard key={item.id} data={item} />
          ))}
        </div>
      </PortWrapper>
    </Wrapper>
  )
}

export default Portfolio
