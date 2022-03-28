import React from "react"
import { FigmaCardProps } from "./types"
import { CardWrapper } from "./Portfolio.styles"
const Card = (props: { data: FigmaCardProps }) => {
  const { data } = props
  return (
    <CardWrapper>
      <div className="card-image">
        {data.type == "figma" && (
          <a href={data.link}>
            <picture>
              <img src={data.image} alt={data.title} />
            </picture>
          </a>
        )}
      </div>
      <div className="card-text">
        <a href={data.link}>
          <h3>
            <i className="fa-brands fa-figma" />
            {data.title}
          </h3>
        </a>
        <p>{data.desc}</p>
        <div className="info">
          {/* <span>
            <i className="fa-solid fa-code-fork" /> {data.forks}
          </span>
          <span>
            <i className="fa-regular fa-star" /> {data.stars}
          </span>
          <span>
            <i className="fa-regular fa-eye" /> {data.watchers}
          </span> */}
        </div>
      </div>
    </CardWrapper>
  )
}

export default Card
