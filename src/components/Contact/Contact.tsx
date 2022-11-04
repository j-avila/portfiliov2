import React, { useEffect, useState } from "react"
import { useLocalStorage } from "react-haiku"
import { useTranslation } from "react-i18next"
import { Iuser } from "../types"
import { ContactBox, Footer } from "./Contact.styles"

const Contact = () => {
  const { t } = useTranslation()
  const [session] = useLocalStorage<Iuser>("session")
  const [networks, setNetworks] = useState([
    {
      name: "github",
      url: "https://github.com/j-avila",
      icon: "fa-brand fa-github",
      show: true,
    },
    {
      name: "dribbble",
      url: "https://dribbble.com/josefosaurus",
      icon: "fa-brand fa-dribbble",
      show: true,
    },
    {
      name: "twitter",
      url: "https://twitter.com/josefosaurus",
      icon: "fa-brand fa-twitter",
      show: true,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/avilajose",
      icon: "fa-brand fa-linkedin",
      show: true,
    },
    {
      name: "CV",
      url: "https://shorturl.at/jyWZ8",
      icon: "fa-solid fa-file-pdf",
      show: true,
    },
    {
      name: "admin",
      url: "/admin",
      icon: "fa-solid fa-sharp fa-poo",
      show: session?.user ? true : false,
    },
  ])

  return (
    <ContactBox>
      <div className="contact">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.desc")}</p>
        <span>
          <a
            href="mailto: hola@joseavila.dev"
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
        {networks.map((item) => {
          return (
            item.show && (
              <a
                key={item.name}
                href={item.url}
                title={item.name}
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fa ${item.icon}`} />
              </a>
            )
          )
        })}
      </Footer>
    </ContactBox>
  )
}

export default Contact
