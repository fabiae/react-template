import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import Public from "./Public/Public"
import Private from "./Private/Private"
import "./App.css"

const App = () => {
  
  const { authenticated } = useSelector(state => state.auth)
  const { language } = useSelector(state => state.utilities)
  const { i18n } = useTranslation()

  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language])

  return (
    <div className="App">
      {
        authenticated ? <Private /> : <Public />
      }
    </div>
  )
}

export default App
