// PrivateRoute.jsx
import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuthStatus from '../hooks/useAuthStatus' // Verwenden Sie den Default-Export
import Spinner from "./Spinner"

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
