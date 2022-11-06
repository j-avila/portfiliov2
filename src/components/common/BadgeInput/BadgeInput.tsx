import React, { Dispatch, KeyboardEvent, SetStateAction } from "react"
import * as st from "./BadgeInput.styles"

interface IState {
  tags: string[]
  tagHandler?: Dispatch<SetStateAction<any>>
}

const BadgeInput = ({ tags, tagHandler }: IState) => {
  const keyDetector = (e: KeyboardEvent) => {
    if (!tagHandler) return
    const target = e.target as HTMLInputElement
    if (e.key !== "Enter") return

    const { value } = target

    console.log(e.key, value)
    if (!value.trim()) return
    tagHandler([...tags, value])
    target.value = ""
    e.preventDefault()
  }

  const removeTag = (pos: number) => {
    const newState = tags.filter((tag, index) => pos !== index && tag)

    tagHandler && tagHandler(newState)
  }

  return (
    <st.TagWarrper>
      {tags?.map((tag: string, index: number) => (
        <st.TagItem key={tag}>
          {tag}
          <i
            className="fas fa-times-circle close"
            onClick={() => removeTag(index)}
          />
        </st.TagItem>
      ))}
      <input
        type="text"
        className="tag-input"
        onKeyDown={keyDetector}
        placeholder="Escribe una categoria"
      />
    </st.TagWarrper>
  )
}

export default BadgeInput
