import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"

type Props = {
  children: React.ReactNode
  theme: object
}

type ITheme = {
  fontSize: {
    md: string
    xl: string
  }
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    accent: string
  }
}

const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    white-space: pre-line;
  }
  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

const StyledTheme: FC<Props> = ({ children, theme }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;800&family=Roboto:wght@100;400;900&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/acc0890c64.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </>
  )
}

export default StyledTheme
