import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import selfIlustration from "@/assets/images/self_ilustration.svg";
import { useUI } from "@/providers/UIProvider";

type WindowType = Window | null;

const BAR_HEIGHT = 295;

const TopBar = () => {
  const [bWindow, setBWindow] = useState<WindowType>(null);
  const { pageCurrentHeight } = useUI();
  const translation = () => -295 + pageCurrentHeight;

  useEffect(() => {
    if (!bWindow) setBWindow(window);
  }, [bWindow]);

  return (
    <section
      className="fixed bg-primary-dark min-w-screen py-[20px] sm:py-[60px] w-full"
      style={{
        zIndex: 10,
        transform: `translate(0, ${translation() > 0 ? 0 : translation()}px)`,
      }}
    >
      <div className="container max-w-[95%] lg:max-w-[1200px]">
        <div className="relative">
          <Link
            href={bWindow?.location.origin ?? ""}
            className="text-white text-[28px] md:text-[48px] text-center md:text-start font-red-hat /// mt-5 pointer"
          >
            Carolina Moutella<span className="text-gray-dark">_</span>
          </Link>
          <div className="absolute right-[-10px] md:right-[0px] top-[-10px] md:top-[-20px] w-[50px] md:w-[160px] lg:w-[200px]">
            <Image
              src={selfIlustration}
              alt="Ilustration of Carolina's face (in 2019)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
