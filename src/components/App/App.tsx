import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { translations } from "../../consts/translation";
import {
  Translation,
  TranslationContext,
} from "../../contexts/translationContext";
import { LangType } from "../../types";
import { setStorageLang } from "../../utils/set-lang";
import Routes from "../Routes";
import { defaultLang } from "./consts";

const App: FC = () => {
  const [lang, setLang] = useState<LangType>("ru");
  const storageLang = localStorage.getItem("lang");

  useEffect(() => {
    if (!storageLang) {
      setStorageLang(defaultLang);
    }

    setLang(storageLang as LangType);
  }, []);

  useEffect(() => {
    setStorageLang(lang);
  }, [lang]);

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
