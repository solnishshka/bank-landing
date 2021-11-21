import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { translations } from "../../consts/translation";
import {
  Translation,
  TranslationContext,
} from "../../contexts/translationContext";
import { LangType } from "../../types";
import Routes from "../Routes";
import { englishVersionUrl } from "./consts";

const App: FC = () => {
  const [lang, setLang] = useState<LangType>("ru");

  useEffect(() => {
    const currentUrl = window.location.origin;

    setLang(currentUrl.includes(englishVersionUrl) ? "en" : "ru");
  }, []);

  const context: Translation = {
    changeLang: (lang: LangType) => setLang(lang),
    currentLang: lang,
    translation: translations[lang],
  };

  return (
    <TranslationContext.Provider value={context}>
      <Router>
        <Routes />
      </Router>
    </TranslationContext.Provider>
  );
};

export default App;
