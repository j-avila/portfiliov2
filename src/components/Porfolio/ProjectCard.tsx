import React from "react"
import { Iproject } from "./types"
import { If } from "react-haiku"
import { CardWrapper } from "./Portfolio.styles"
const ProjectCard = (props: {
  data: Iproject
  isEdit?: boolean
  handleDelete?: (arg0: string) => void
}) => {
  const { data, isEdit = false, handleDelete } = props
  return (
    <CardWrapper>
      <div className="card-image">
        {data?.image && (
          <a href={isEdit ? `/project/${data._id}` : data.link}>
            <picture>
              <img src={data.image} alt={data.name} />
            </picture>
          </a>
        )}
      </div>
      <div className="card-text">
        <a href={data.link}>
          <h3>
            <i className="fa-brands fa-github" />
            {data.name}
          </h3>
        </a>
        <p>{data.description}</p>
        <div className="info">
          <span>
            <i className="fa-solid fa-tag" />
            {data.tags?.map((item) => (
              <span className="tag">{item}</span>
            ))}
          </span>
        </div>
      </div>
      <If isTrue={isEdit}>
        <div className="actions">
          {handleDelete && (
            <i
              className="fas fa-trash"
              onClick={() => handleDelete(data._id)}
            />
          )}
        </div>
      </If>
    </CardWrapper>
  )
}

export default ProjectCard
