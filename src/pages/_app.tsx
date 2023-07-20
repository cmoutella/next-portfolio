import "@/styles/globals.css";
import { changaOne, hanSans, paytone, redHat } from "@/styles/utils/fonts";
import type { AppProps } from "next/app";

// Providers
import { TranslationProvider } from "@/providers/TranslationProvider";
import { UIProvider } from "@/providers/UIProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <style jsx global>{`
        :root {
          --han-sans-font: ${hanSans.style.fontFamily};
          --changa-one-font: ${changaOne.style.fontFamily};
          --paytone-font: ${paytone.style.fontFamily};
          --red-hat-font: ${redHat.style.fontFamily};
        }
      `}</style>
      <>
        <TranslationProvider>
          <UIProvider>
            <Component {...pageProps} />
          </UIProvider>
        </TranslationProvider>
      </>
    </div>
  );
}
