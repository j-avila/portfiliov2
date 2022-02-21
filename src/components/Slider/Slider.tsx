import React from "react"
import { useTranslation } from "react-i18next"
import { SliderContainer } from "./Slider.styles"
import { ReactComponent as JSBadge } from "../../assets/js.svg"
import { ReactComponent as ReactBadge } from "../../assets/react.svg"
import { ReactComponent as NodeBadge } from "../../assets/node.svg"
import { ReactComponent as NGBadge } from "../../assets/angular.svg"
import { ReactComponent as PHPBadge } from "../../assets/php.svg"

const Slider = () => {
  return (
    <SliderContainer>
      <div className="slider-item">
        <JSBadge />
        <ReactBadge />
        <NodeBadge />
        <NGBadge />
        <PHPBadge />
      </div>
    </SliderContainer>
  )
}

export default Slider
