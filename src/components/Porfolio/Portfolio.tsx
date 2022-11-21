import React, { useEffect, useState } from "react"
import { If } from "react-haiku"
import { useTranslation } from "react-i18next"
import { formatDBCard, formatGhCard, formatPjtCard } from "../../utils/helplers"
import Slider from "../Slider"
import DribbbleCard from "./DribbbleCard"
import GithubCard from "./GithubCard"
import { Wrapper, PortWrapper } from "./Portfolio.styles"
import ProjectCard from "./ProjectCard"
import {
  DribbbleCardProps,
  GithubcardProps,
  Iproject,
  PortfolioProps,
} from "./types"

const NotFound = (props: { title: String }) => (
  <div className="not-found">
    <i className="fa-solid fa-triangle-exclamation" />
    <h1>{props.title}</h1>
  </div>
)
const Portfolio = ({
  githubData,
  dribbbleData,
  projectsData,
  loading = true,
}: PortfolioProps) => {
  const { t } = useTranslation()

  const [section, setSection] = useState<string>("projects")
  const [repos, setRepoCards] = useState([] as GithubcardProps[])
  const [projects, setProjectCards] = useState([] as Iproject[])
  const [dribbble, setDribbbleCards] = useState([])

  useEffect(() => {
    githubData?.length && setRepoCards(formatGhCard(githubData))
    projectsData?.length && setProjectCards(formatPjtCard(projectsData))
    dribbbleData?.length && setDribbbleCards(formatDBCard(dribbbleData))
  }, [githubData, dribbbleData, projectsData])

  return (
    <Wrapper>
      <div className="bio">
        <h1>{t("bio.title")}</h1>
        <p>{t("bio.desc")}</p>
        <p>{t("bio.stack")}</p>
        <Slider />
      </div>
      <PortWrapper isloading={loading}>
        <span className="menu">
          <h1>{t("bio.works")}</h1>
          <i
            className={`fas fa-code ${section === "projects" ? "active" : ""}`}
            onClick={() => setSection("projects")}
          />
          <i
            className={`fas fa-bezier-curve ${
              section === "design" ? "active" : ""
            }`}
            onClick={() => setSection("design")}
          />
          {/*  <i
            className={`fas fa-code-branch ${
              section === "code" ? "active" : ""
            }`}
            onClick={() => setSection("repos")}
          /> */}
        </span>
        <div className="portwrapper">
          <If isTrue={loading}>
            <i className="fa-solid fa-circle-notch fa-spin spinner" />
          </If>
          <If isTrue={!loading}>
            <>
              {section === "projects" ? (
                projects?.length >= 1 ? (
                  projects.map((item: Iproject) => (
                    <ProjectCard key={item._id} data={item} />
                  ))
                ) : (
                  <NotFound title={t("bio.nothing-found")} />
                )
              ) : section === "design" ? (
                dribbble?.length >= 1 ? (
                  dribbble.map((item: DribbbleCardProps) => (
                    <DribbbleCard key={item.id} data={item} />
                  ))
                ) : (
                  <NotFound title={t("bio.nothing-found")} />
                )
              ) : repos?.length >= 1 ? (
                repos.map((item: GithubcardProps) => (
                  <GithubCard key={item.id} data={item} />
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
