import React from "react"
import { SliderContainer } from "./Slider.styles"
import { ReactComponent as JSBadge } from "../../assets/icons/js-logo.svg"
import { ReactComponent as TSBadge } from "../../assets/icons/ts-logo.svg"
import { ReactComponent as ReactBadge } from "../../assets/icons/react.svg"
import { ReactComponent as NodeBadge } from "../../assets/icons/nodejs.svg"
import { ReactComponent as NGBadge } from "../../assets/icons/angular.svg"
import { ReactComponent as PHPBadge } from "../../assets/icons/php.svg"
import { ReactComponent as SSPABadge } from "../../assets/icons/single-spa.svg"
import { ReactComponent as NEXTBadge } from "../../assets/icons/nextjs.svg"
import { ReactComponent as FIGMABadge } from "../../assets/icons/figma.svg"
import { ReactComponent as MDBBadge } from "../../assets/icons/mongodb.svg"
import { ReactComponent as SQLBadge } from "../../assets/icons/mysql.svg"
import { ReactComponent as FBSBadge } from "../../assets/icons/firebase.svg"
import { ReactComponent as TSFBadge } from "../../assets/icons/tensorflow.svg"
import Popup from "../common/Popup"

const Slider = () => {
  return (
    <SliderContainer>
      <div className="slider-item">
        <Popup content="JS vanilla">
          <JSBadge width={50} height={50} />
        </Popup>
        <Popup content="Typescript">
          <TSBadge width={50} height={50} />
        </Popup>
        <Popup content="ReactJS/React Native">
          <ReactBadge width={50} height={50} />
        </Popup>
        <Popup content="NodeJS">
          <NodeBadge width={50} height={50} />
        </Popup>
        <Popup content="Angular">
          <NGBadge width={50} height={50} />
        </Popup>
        <Popup content="Single-SPA">
          <SSPABadge width={50} height={50} />
        </Popup>
        <Popup content="PHP">
          <PHPBadge width={60} height={60} />
        </Popup>
        <Popup content="NextJS">
          <NEXTBadge width={50} height={50} />
        </Popup>
        <Popup content="Firebase">
          <FBSBadge width={50} height={50} />
        </Popup>
        <Popup content="MongoDB">
          <MDBBadge width={50} height={50} />
        </Popup>
        <Popup content="MYSQL">
          <SQLBadge width={50} height={50} />
        </Popup>
        <Popup content="Figma">
          <FIGMABadge width={50} height={50} />
        </Popup>
        <Popup content="TensorFlowJS">
          <TSFBadge width={50} height={50} />
        </Popup>
      </div>
    </SliderContainer>
  )
}

export default Slider
