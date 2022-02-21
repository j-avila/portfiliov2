import React, { createContext, FC, useState } from "react"

type Props = {
  children: React.ReactNode
}

type IState = {
  device: string
  theme: string
}

type IContext = {
  appContext: IState
  setContext: (context: IState) => void
}

export const Context = createContext<IContext>({
  appContext: { device: "desktop", theme: "default" },
  setContext: () => {},
})

export const SiteProvider: FC<Props> = ({ children }) => {
  const [appContext, setContext] = useState({
    device: "desktop",
    theme: "default",
  })

  const setAppContext = (args: IState) => setContext(args)

  return (
    <Context.Provider value={{ appContext, setContext: setAppContext }}>
      {children}
    </Context.Provider>
  )
}

Context.displayName = "appContext"

export default Context
