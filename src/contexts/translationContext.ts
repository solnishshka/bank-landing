import React from "react";
import { translations } from "../consts/translation";
import { LangType } from "../types";

export interface Translation {
  changeLang: (lang: LangType) => void;
  currentLang: LangType;
  translation: typeof translations["ru"];
}

const defaultContext: Translation = {
  changeLang: () => null,
  currentLang: "ru",
  translation: translations["ru"],
};

export const TranslationContext =
  React.createContext<Translation>(defaultContext);
