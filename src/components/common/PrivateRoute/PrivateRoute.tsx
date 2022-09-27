import React, { useEffect } from "react"
import { useLocalStorage } from "react-haiku"
import { Navigate, Outlet } from "react-router-dom"
import { Iuser } from "../../types"

const PrivateRoutes = () => {
  const [session] = useLocalStorage<Iuser>("session")

  useEffect(() => {
    console.log(session.user)
  }, [])

  return session.user?.token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
