import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import selfIlustration from "@/assets/images/self_ilustration.svg";
import { useUI } from "@/providers/UIProvider";
import { useTranslation } from "@/providers/TranslationProvider";

type NavItemLink = {
  name: string;
  path: string;
};

const Navbar = () => {
  const ref = useRef(null);
  const { text } = useTranslation();
  const { pageCurrentHeight } = useUI();
  const translation = () => -80 + pageCurrentHeight;
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <section
      ref={ref}
      className="fixed w-screen"
      style={{
        zIndex: 10,
        transform: `translate(0, ${translation() > 0 ? 0 : translation()}px)`,
      }}
    >
      <div className="bg-primary-dark w-full py-[12px]">
        <div className="container flex justify-between items-end">
          <Link
            href={window.location.origin}
            className="flex items-center justify-start"
          >
            <div className="mr-[20px]">
              <Image
                src={selfIlustration}
                alt="Ilustration of Carolina's face (in 2019)"
                width={40}
                height={40}
              />
            </div>
            <div className="text-white text-[20px] sm:text-[24px] font-red-hat /// max-w-[200px] sm:max-w-none mt-5 pointer">
              Carolina Moutella<span className="text-gray-dark">_</span>
            </div>
          </Link>

          {/* mobile menu button */}
          <button
            className="md:hidden translate-y-[-7px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* desktop menu */}
          <div className="hidden md:flex items-center justify-start /// text-[14px] text-white font-medium uppercase">
            {text.navigation.map((nav: NavItemLink, i: number) => (
              <Link
                key={i}
                href={`${window.location.origin}${nav.path}`}
                className="mr-[20px]"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "flex flex-col" : "hidden"
        } items-end justify-start /// text-[14px] font-medium uppercase text-primary-medium /// bg-[#FFF5FA] rounded-b-[8px] /// pb-[8px]`}
      >
        {text.navigation.map((nav: NavItemLink, i: number) => (
          <Link
            key={i}
            href={`${window.location.origin}${nav.path}`}
            className="mr-[20px] py-[12px]"
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
