import React from "react"
import { Container } from "./About.styles"
import { ReactComponent as CodeBadge } from "../../assets/icons/code-icon.svg"
import { ReactComponent as DesignBadge } from "../../assets/icons/design-icon.svg"
import { ReactComponent as DrumBadge } from "../../assets/icons/drum-icon.svg"
import Popup from "../common/Popup"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()

  return (
    <Container width="80%" align="space-between">
      <Popup
        content={<p>{t("bio.coder")}</p>}
        link="https://github.com/j-avila"
      >
        <CodeBadge width={120} height={120} fill="#ffffffa6" />
      </Popup>
      <Popup
        content={<p>{t("bio.designer")}</p>}
        link="https://dribbble.com/josefosaurus"
      >
        <DesignBadge width={120} height={120} fill="#ffffffa6" />
      </Popup>
      <Popup
        content={<p>{t("bio.drummer")}</p>}
        link="https://youtu.be/Wqz6prNhXrw?t=426"
      >
        <DrumBadge width={120} height={120} fill="#ffffffa6" />
      </Popup>
    </Container>
  )
}

export default About
