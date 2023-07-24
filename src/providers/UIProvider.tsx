import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface UIContext {
  pageCurrentHeight: number;
}

const DEFAULT_VALUES: UIContext = {
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
    pageCurrentHeight: pageCurrentHeight,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
