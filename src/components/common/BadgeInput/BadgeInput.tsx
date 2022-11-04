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

    if (!value.trim()) return
    tagHandler([...tags, value])
    target.value = ""
  }

  return (
    <st.TagWarrper>
      {tags?.map((tag: string) => (
        <st.TagItem>{tag}</st.TagItem>
      ))}
      <input type="text" className="tag-input" onKeyDown={keyDetector} />
    </st.TagWarrper>
  )
}

export default BadgeInput
