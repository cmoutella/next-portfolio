import { ReactNode } from "react";
import { redHat } from "@/styles/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DefaultTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen min-w-screen ${redHat.className}`}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
