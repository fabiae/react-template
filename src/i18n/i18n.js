import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { en } from "./resources/en"
import { es } from "./resources/es"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
