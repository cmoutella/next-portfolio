import { ReactNode } from "react";
import { redHat } from "@/styles/utils/fonts";
import Navigation from "@/components/TopBar";
import Footer from "@/components/Footer";

const LandingTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      <div
        className={`flex min-h-screen min-w-screen flex-col items-center justify-between pt-[60px] ${redHat.className}`}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LandingTemplate;
