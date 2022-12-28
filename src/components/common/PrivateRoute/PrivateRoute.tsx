import React from "react"
import { useLocalStorage } from "react-haiku"
import { Navigate, Outlet } from "react-router-dom"
import { Iuser } from "../../types"

const PrivateRoutes = () => {
  const [session] = useLocalStorage<Iuser>("session")

  return session.user?.token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
