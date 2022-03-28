import React from "react"
import { GithubcardProps } from "./types"
import { CardWrapper } from "./Portfolio.styles"
const GithubCard = (props: { data: GithubcardProps }) => {
  const { data } = props
  return (
    <CardWrapper>
      <div className="card-text">
        <a href={data.link}>
          <h3>
            <i className="fa-brands fa-github" />
            {data.title}
          </h3>
        </a>
        <p>{data.desc}</p>
        <div className="info">
          <span>
            <i className="fa-solid fa-code-fork" /> {data.forks}
          </span>
          <span>
            <i className="fa-regular fa-star" /> {data.stars}
          </span>
          <span>
            <i className="fa-regular fa-eye" /> {data.watchers}
          </span>
        </div>
      </div>
    </CardWrapper>
  )
}

export default GithubCard
