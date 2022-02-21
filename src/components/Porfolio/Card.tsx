import React from "react"
import { CardProps } from "./types"
import { CardWrapper } from "./Portfolio.styles"
const Card = (props: { data: CardProps }) => {
  const { data } = props
  return (
    <CardWrapper>
      <div className="card-image">
        <a href={data.link}>
          <picture>
            <img src={data.image} alt={data.title} />
          </picture>
        </a>
      </div>
      <div className="card-text">
        <a href={data.link}>
          <h3>{data.title}</h3>
        </a>
        <p>{data.desc}</p>
      </div>
    </CardWrapper>
  )
}

export default Card
