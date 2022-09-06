import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./config/i18n"
import StyledTheme from "./components/HOC/StyledTheme"
import theme from "./config/theme"

import Login from "./pages/Login"
import Homepage from "./pages/HomePage"
import Admin from "./pages/Admin"
import NotFound from "./components/NotFound"
import PrivateRoutes from "./components/common/PrivateRoute"
import { SiteProvider } from "./context/Context"

function App() {
  //TODO resolver el tema de las ip dinamicas y mongo altlas
  return (
    <div className="App">
      <SiteProvider>
        <StyledTheme theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </StyledTheme>
      </SiteProvider>
    </div>
  )
}

export default App
