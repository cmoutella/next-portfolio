import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { MotionValue, useMotionValueEvent, useScroll } from "framer-motion";

import { ElementRefType, PageCurrentHeight } from "@/types";

interface UIContext {
  hero: ElementRefType;
  setHero: Dispatch<HTMLDivElement>;
  bar: ElementRefType;
  setBar: Dispatch<HTMLDivElement>;
  pageCurrentHeight: number;
}

const DEFAULT_VALUES: UIContext = {
  hero: null,
  setHero: (_: HTMLDivElement) => null,
  bar: null,
  setBar: (_: HTMLDivElement) => null,
  pageCurrentHeight: 0,
};

const UIContext = createContext<UIContext>(DEFAULT_VALUES);

export const useUI = () => {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("Missing UIContext on React tree");
  }

  return context;
};

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [hero, setHero] = useState<ElementRefType>(null);
  const [bar, setBar] = useState<ElementRefType>(null);
  const [pageCurrentHeight, setPageCurrentHeight] = useState<number>(0);
  const { scrollY } = useScroll();

  // when page scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    setPageCurrentHeight(latest);
  });

  if (typeof window === "undefined") {
    return null;
  }

  const value = {
    hero: hero,
    setHero: setHero,
    bar: bar,
    setBar: setBar,
    pageCurrentHeight: pageCurrentHeight,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
