import Cta from "./Cta";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

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
  const displayOrder = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const spacingFromImage = reverse ? "sm:ml-[60px]" : "sm:mr-[60px]";

  return (
    <section className="container">
      <div className="block w-[900px]">
        <div
          className={`flex flex-col-reverse  ${displayOrder} items-center justify-between`}
        >
          <div
            className={`flex flex-col items-center sm:items-end /// sm:max-w-[500px] ${spacingFromImage}`}
          >
            <p className="text-[14px] sm:text-[18px] text-center sm:text-left /// max-w-[80%] sm:max-w-none m-auto mb-4">
              {description}
            </p>
            <LinkButton
              linkUrl={btnUrl}
              label={btnLabel}
              btnClasses="bg-secondary-light"
            />
          </div>
          <div className="h-[200px] sm:hidden">
            <Image src={imageUrl} alt="cellphone image" height={200} />
          </div>
          <div className="hidden sm:block">
            <Image src={imageUrl} alt="cellphone image" height={392} />
          </div>
        </div>
        <Cta />
      </div>
    </section>
  );
};

export default Section;
