import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const DefaultTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;
