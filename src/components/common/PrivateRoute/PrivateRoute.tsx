import React, { useEffect } from "react"
import { useLocalStorage } from "react-haiku"
import { Navigate, Outlet } from "react-router-dom"

interface Iuser {
  user: {
    token?: string
    user: {
      name: string
      email: string
      role: "ADMIN_ROLE" | "USER_ROLE"
      state: boolean
      uid: string
    }
  }
}

const PrivateRoutes = () => {
  const [session] = useLocalStorage<Iuser>("session")

  useEffect(() => {
    console.log(session.user)
  }, [])

  return session.user?.token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
