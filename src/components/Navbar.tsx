import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import selfIlustration from "@/assets/images/self_ilustration.svg";
import { useUI } from "@/providers/UIProvider";

const Navbar = () => {
  const ref = useRef(null);
  const { pageCurrentHeight } = useUI();
  const translation = () => -80 + pageCurrentHeight;

  return (
    <section
      ref={ref}
      className="fixed bg-primary-medium w-screen py-[12px] sm:py-[12px"
      style={{
        zIndex: 10,
        transform: `translate(0, ${translation() > 0 ? 0 : translation()}px)`,
      }}
    >
      <div className="container flex justify-between items-end">
        <div className="flex items-center justify-start">
          <div className="mr-[20px]">
            <Image
              src={selfIlustration}
              alt="Ilustration of Carolina's face (in 2019)"
              width={40}
              height={40}
            />
          </div>
          <Link
            href={window.location.origin}
            className="text-white text-[18px] sm:text-[24px] font-red-hat /// max-w-[200px] sm:max-w-none mt-5 pointer"
            onClick={() => {}}
          >
            Carolina Moutella<span className="text-gray-dark">_</span>
          </Link>
        </div>
        <div className="flex items-center justify-start text-[14px] text-white uppercase">
          <Link
            href={`${window.location.origin}/services`}
            className="mr-[20px]"
          >
            Serviços
          </Link>
          <Link href={`${window.location.origin}/career`} className="mr-[20px]">
            Carreira
          </Link>
          <Link href={`${window.location.origin}/menthorship`}>Mentoria</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
