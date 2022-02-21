import React from "react"
import { useTranslation } from "react-i18next"
import { ContactBox, Footer } from "./Contact.styles"

const networks = [
  {
    name: "github",
    url: "https://github.com/j-avila",
    icon: "fa-brand fa-github",
  },
  {
    name: "dribbble",
    url: "https://dribbble.com/josefosaurus",
    icon: "fa-brand fa-dribbble",
  },
  {
    name: "twitter",
    url: "https://twitter.com/josefosaurus",
    icon: "fa-brand fa-twitter",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/avilajose",
    icon: "fa-brand fa-linkedin",
  },
  {
    name: "CV",
    url: "https://shorturl.at/jyWZ8",
    icon: "fa-solid fa-file-pdf",
  },
]

const Contact = () => {
  const { t } = useTranslation()
  return (
    <ContactBox>
      <div className="contact">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.desc")}</p>
        <span>
          <a
            href="mailto: jose.leon.avila@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            type="button"
          >
            {t("contact.cta")}
          </a>
        </span>
      </div>
      <Footer>
        {networks.map((item) => (
          <a href={item.url} title={item.name} target="_blank" rel="noreferrer">
            <i className={`fa ${item.icon}`} />
          </a>
        ))}
      </Footer>
    </ContactBox>
  )
}

export default Contact
