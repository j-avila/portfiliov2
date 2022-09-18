import React, { useState } from "react"
import { useLocalStorage } from "react-haiku"
import { fetchOptions } from "../helplers"
import { IForm } from "./types"

const useLogin = () => {
  const apiUrl = process.env.REACT_APP_PORTFOLIO_API
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useLocalStorage("session")

  const handleLogin = (form: IForm): void => {
    setLoading(true)
    fetch(`${apiUrl}/login`, fetchOptions(form))
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw console.error("Error on login")
        }
      })
      .then((data) => {
        setSession({ user: data })
        setLoading(false)
        window.location.assign("/admin")
      })
      .catch((error) => {
        console.log("error:", error)
        alert("datos erroneos")
        setLoading(false)
        return error
      })
  }

  return { loading, handleLogin }
}

export default useLogin
