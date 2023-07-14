import Image from "next/image";
import Link from "next/link";

import selfIlustration from "@/assets/images/self_ilustration.svg";

const Navbar = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <section className="bg-primary-medium min-w-screen py-[12px] sm:py-[12px]">
      <div className="container">
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
      </div>
    </section>
  );
};

export default Navbar;
