import React from "react"
import { SiteProvider } from "./context/Context"
import StyledTheme from "./components/HOC/StyledTheme"
import theme from "./config/theme"
import Homepage from "./pages/HomePage"
import "./config/i18n"

function App() {
  return (
    <div className="App">
      <SiteProvider>
        <StyledTheme theme={theme}>
          <Homepage />
        </StyledTheme>
      </SiteProvider>
    </div>
  )
}

export default App
