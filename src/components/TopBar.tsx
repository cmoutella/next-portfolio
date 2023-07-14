import Image from "next/image";
import Link from "next/link";

import selfIlustration from "@/assets/images/self_ilustration.svg";

const TopBar = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <section className="bg-primary-medium min-w-screen py-[20px] sm:py-[60px]">
      <div className="container max-w-[1200px]">
        <div className="relative">
          <Link
            href={window.location.origin}
            className="text-white text-[40px] sm:text-[48px] font-red-hat /// max-w-[200px] sm:max-w-none mt-5 pointer"
            onClick={() => {}}
          >
            Carolina Moutella<span className="text-gray-dark">_</span>
          </Link>
          <div className="absolute right-[80px] top-[-20px]">
            <Image
              src={selfIlustration}
              alt="Ilustration of Carolina's face (in 2019)"
              width={270}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
