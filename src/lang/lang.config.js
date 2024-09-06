import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./uz/uz.json";
import ru from "./ru/ru.json";
import eng from "./eng/eng.json";

const resources={
    uz:{
        translation:uz
    },
    ru:{
        translation:ru
    },
    eng:{
        translation:eng
    }
}

i18n.use(initReactI18next).init({
    resources,
    lang:'eng',
    interpolation: {
    escapeValue: false 
      } 
})


export default i18n;