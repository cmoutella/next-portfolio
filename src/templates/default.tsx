import { ReactNode } from "react";
import { redHat } from "@/styles/utils/fonts";

const DefaultTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between ${redHat.className}`}
    >
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;
