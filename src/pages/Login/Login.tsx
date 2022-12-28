/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react"
import { useLocalStorage } from "react-haiku"
import Button from "../../components/common/Button"
import InputField from "../../components/common/InputField"

import { ReactComponent as Badge } from "../../assets/badge.svg"
import theme from "../../config/theme"

import * as St from "./Login.styles"
import useLogin from "../../hooks/login"
import { IForm } from "../../hooks/types"

const Login = () => {
  const [form, setForm] = useState<IForm>()
  const [session, setSession] = useLocalStorage("session")
  const { loading, handleLogin } = useLogin()

  useEffect(() => {
    setSession({ user: null })
  }, [setSession])

  return (
    <St.Login>
      <Badge />
      <h1>Login</h1>
      <form>
        <InputField
          className="inputfield"
          label="user"
          display="block"
          disabled={loading ? true : undefined}
          onChange={(e): void => setForm({ ...form, email: e.target.value })}
        />
        <InputField
          className="inputfield"
          label="password"
          type="password"
          display="block"
          disabled={loading ? true : undefined}
          onChange={(e): void => setForm({ ...form, password: e.target.value })}
        />
        <Button
          content={
            loading ? (
              <i className="fa-solid fa-circle-notch fa-spin spinner" />
            ) : (
              "ingresar"
            )
          }
          color={loading ? theme.colors.secondary : theme.colors.accent}
          disabled={loading ? true : undefined}
          type="button"
          onClick={() => handleLogin(form as IForm)}
        />
      </form>
    </St.Login>
  )
}

export default Login
