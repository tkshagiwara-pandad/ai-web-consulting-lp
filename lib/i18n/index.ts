import { en } from "./en";
import { ja } from "./ja";
import { brand } from "../config/brand";

export type Locale = "ja" | "en";

export const dictionaries = {
  ja,
  en,
} as const;

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale];
};

export const getBrand = (locale: Locale) => {
  return brand[locale];
};
