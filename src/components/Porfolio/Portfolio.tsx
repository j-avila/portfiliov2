import React, { useEffect, useState } from "react"
import { If } from "react-haiku"
import { useTranslation } from "react-i18next"
import { formatDBCard, formatGhCard } from "../../utils/helplers"
import DribbbleCard from "./DribbbleCard"
import GithubCard from "./GithubCard"
import { Wrapper, PortWrapper } from "./Portfolio.styles"
import { DribbbleCardProps, GithubcardProps, PortfolioProps } from "./types"

const NotFound = (props: { title: String }) => (
  <div className="not-found">
    <i className="fa-solid fa-triangle-exclamation" />
    <h1>{props.title}</h1>
  </div>
)
const Portfolio = ({
  githubData,
  dribbbleData,
  loading = true,
}: PortfolioProps) => {
  const { t } = useTranslation()

  const [section, setSection] = useState<string>("code")
  const [repos, setRepoCards] = useState([] as GithubcardProps[])
  const [dribbble, setDribbbleCards] = useState([])

  useEffect(() => {
    githubData?.length && setRepoCards(formatGhCard(githubData))
    dribbbleData?.length && setDribbbleCards(formatDBCard(dribbbleData))
  }, [githubData, dribbbleData])

  return (
    <Wrapper>
      <div className="bio">
        <h1>{t("bio.title")}</h1>
        <p>{t("bio.desc")}</p>
        <p>{t("bio.techs")}</p>
      </div>
      <PortWrapper isloading={loading}>
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
          <If isTrue={loading}>
            <i className="fa-solid fa-circle-notch fa-spin spinner" />
          </If>
          <If isTrue={!loading}>
            <>
              {section === "code" ? (
                repos?.length >= 1 ? (
                  repos.map((item: GithubcardProps) => (
                    <GithubCard key={item.id} data={item} />
                  ))
                ) : (
                  <NotFound title={t("bio.nothing-found")} />
                )
              ) : dribbble?.length >= 1 ? (
                dribbble.map((item: DribbbleCardProps) => (
                  <DribbbleCard key={item.id} data={item} />
                ))
              ) : (
                <NotFound title={t("bio.nothing-found")} />
              )}
            </>
          </If>
        </div>
      </PortWrapper>
    </Wrapper>
  )
}

export default Portfolio
