import React from "react"
import { DribbbleCardProps } from "./types"
import { CardWrapper } from "./Portfolio.styles"
import { stringToHTML } from "../../utils/helplers"
import HTMLReactParser from "html-react-parser"
const DribbbleCard = (props: { data: DribbbleCardProps }) => {
  const { data } = props
  return (
    <CardWrapper>
      <div className="card-image">
        {data?.images?.normal && (
          <a href={data.html_url}>
            <picture>
              <img src={data.images.normal} alt={data.title} />
            </picture>
          </a>
        )}
      </div>
      <div className="card-text">
        <a href={data.html_url}>
          <h3>
            <i className="fa-brands fa-dribbble" />
            {data.title}
          </h3>
        </a>
        <>{HTMLReactParser(data.desc)}</>
        <div className="info tags">
          <span>
            <i className="fa-solid fa-tag" />
            {data.tags?.map((item) => (
              <span className="tag">{item}</span>
            ))}
          </span>
        </div>
      </div>
    </CardWrapper>
  )
}

export default DribbbleCard
