import React from "react"
import { ButtonProps } from "./types"
import * as St from "./Button.styles"

const Button = ({ content, color, ...props }: ButtonProps) => {
  return (
    <St.ButWrapper color={color} {...props}>
      {content}
    </St.ButWrapper>
  )
}

export default Button
