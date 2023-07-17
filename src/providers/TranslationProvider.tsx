import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import ptTexts from "@/texts/PT";
import enTexts from "@/texts/EN";

type AvailableLanguage = "pt" | "en";

// TODO: como tipar?
type Language = any;

interface TranslationContext {
  currLanguage: AvailableLanguage;
  setLanguage?: Dispatch<SetStateAction<AvailableLanguage>>;
  text: Language;
}

const DEFAULT_VALUES: TranslationContext = {
  currLanguage: "pt",
  setLanguage: (a: SetStateAction<AvailableLanguage>) => null,
  text: {},
};

const TranslationContext = createContext<TranslationContext>(DEFAULT_VALUES);

export const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error("Missing TranslationContext on React tree");
  }

  return context;
};

type LanguageTexts = {
  pt: Language;
  en: Language;
};

const texts: LanguageTexts = {
  pt: ptTexts,
  en: enTexts,
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currLanguage, setCurrLanguage] = useState<AvailableLanguage>("pt");

  const textContent = useMemo(() => texts[currLanguage], [currLanguage]);

  const value = {
    currLanguage: currLanguage,
    setLanguage: setCurrLanguage,
    text: textContent,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
