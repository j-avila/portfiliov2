import React from "react"
import { useTranslation } from "react-i18next"
import { CoverContainer } from "./Cover.styles"
// assets
import me from "../../assets/me.png"

// types
type Istat = {
  label: string
  value: number
}

const stats: Istat[] = [
  { value: 20, label: "years_experience" },
  { value: 30, label: "repos-published" },
  { value: 10, label: "published_projects" },
]

const Cover = () => {
  const { t } = useTranslation()

  return (
    <CoverContainer>
      <section className="title">
        <h1>{t("cover.title")}</h1>
      </section>
      <section className="photo">
        <img src={me} alt="Me" />
      </section>
      <section className="stats">
        {stats?.map((stat) => (
          <div className="stat" key={stat.value}>
            <h2>{stat.value}+</h2>
            <p>{t(`cover.${stat.label}`)}</p>
          </div>
        ))}
      </section>
    </CoverContainer>
  )
}

export default Cover
