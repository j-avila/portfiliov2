import React, { createContext, FC, useContext, useState } from "react"

type Props = {
  children: React.ReactNode
}

type IState = {
  device: string
  theme: string
  session: string | null
}

type IContext = {
  appContext: IState
  setContext: (context: IState) => void
}

export const Context = createContext<IContext>({
  appContext: {
    device: "desktop",
    theme: "default",
    session: null,
  },
  setContext: () => {},
})

export const SiteProvider: FC<Props> = ({ children }) => {
  const [appContext, setContext] = useState({
    device: "desktop",
    theme: "default",
    session: null,
  })

  const setAppContext = (args: any) => setContext(args)

  return (
    <Context.Provider value={{ appContext, setContext: setAppContext }}>
      {children}
    </Context.Provider>
  )
}

Context.displayName = "appContext"

export const useSiteContext = () => useContext(Context)

export default Context
