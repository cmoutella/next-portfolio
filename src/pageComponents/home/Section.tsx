import Link from "next/link";
import Cta from "./Cta";
import Image from "next/image";

type SectionProps = {
  description: string;
  btnLabel: string;
  btnUrl: string;
  imageUrl: string;
  reverse?: boolean;
};

const Section = ({
  description,
  btnLabel,
  btnUrl,
  imageUrl,
  reverse = false,
}: SectionProps) => {
  return (
    <div className="container mx-auto">
      <section className="block w-[900px]">
        <div
          className={`flex flex-col-reverse md:row ${
            reverse ? "flex-row-reverse" : "flex-row"
          } items-center justify-between`}
        >
          <div className="align-right">
            <p className="text-[14px] sm:text-[18px] sm:max-w-unset text-center sm:text-left max-w-[80%] m-auto mb-4">
              {description}
            </p>
            <Link
              href={btnUrl}
              className="flex items-center m-auto md:m-0 mb-5 md:mb-0 mt-2"
            >
              {btnLabel}
              {/* <Icon icon="arrow" /> */}
            </Link>
          </div>
          <div className="h-[200px] sm:h-[392px]">
            <Image src={imageUrl} alt="cellphone image" />
          </div>
        </div>
        <Cta />
      </section>
    </div>
  );
};

export default Section;
