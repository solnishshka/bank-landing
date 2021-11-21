import { LangType } from "../types";

export const setStorageLang = (lang: LangType) => {
  localStorage.setItem("lang", lang);
};
