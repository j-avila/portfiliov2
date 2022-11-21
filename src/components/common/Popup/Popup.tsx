import React, { ReactNode } from "react"
import { Popper } from "./Popup.styles"

interface PopUpProps {
  direction?: string
  children: ReactNode
  content: ReactNode
  background?: string
  link?: string | undefined
}

const Popup = ({
  children,
  direction = "top",
  content,
  background = "white",
  link = undefined,
}: PopUpProps) => {
  return (
    <Popper direction={direction} background={background}>
      <a href={link} target={link ? "_blank" : undefined} rel="noreferrer">
        {children}
        <span>{content}</span>
      </a>
    </Popper>
  )
}

export default Popup
