import React from "react"
import { If } from "react-haiku"
import { InputProps } from "./types"

import * as St from "./inputField.styles"

const InputField = ({
  label,
  className,
  type = "text",
  display = "inline",
  onChange,
}: InputProps) => {
  return (
    <St.InputWrap className={`${className} ${display}`}>
      <If isTrue={label ? true : false}>
        <label>{label}</label>
      </If>
      <input type={type} onChange={onChange} />
    </St.InputWrap>
  )
}

export default InputField
