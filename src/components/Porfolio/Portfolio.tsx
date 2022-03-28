import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { formatGhCard } from "../../utils/helplers"
import FigmaCard from "./figmaCard"
import GithubCard from "./GithubCard"
import { Wrapper, PortWrapper } from "./Portfolio.styles"
import { FigmaCardProps, GithubcardProps, PortfolioProps } from "./types"

const NotFound = (props: { desc?: String }) => (
  <div className="not-found">
    <i className="fa-solid fa-triangle-exclamation" />
    <h1>{desc}</h1>
  </div>
)

const Portfolio = ({ githubData }: PortfolioProps) => {
  const { t } = useTranslation()
  const [section, setSection] = useState<string>("code")
  const [repos, setRepoCards] = useState([] as GithubcardProps[])
  const [figma, setFigmaCards] = useState([])

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
        <span className="menu">
          <h1>{t("bio.works")}</h1>
          <i
            className={`fas fa-code ${section === "code" ? "active" : ""}`}
            onClick={() => setSection("code")}
          />
          <i
            className={`fas fa-bezier-curve ${
              section === "design" ? "active" : ""
            }`}
            onClick={() => setSection("design")}
          />
        </span>
        <div className="portwrapper">
          <>
            {section === "code" ? (
              repos?.length >= 1 ? (
                repos.map((item: GithubcardProps) => (
                  <GithubCard key={item.id} data={item} />
                ))
              ) : (
                <NotFound desc={t("bio.nothing-found")} />
              )
            ) : figma?.length >= 1 ? (
              figma.map((item: FigmaCardProps) => (
                <FigmaCard key={item.id} data={item} />
              ))
            ) : (
              <NotFound desc={t("bio.nothing-found")} />
            )}
          </>
        </div>
      </PortWrapper>
    </Wrapper>
  )
}

export default Portfolio
