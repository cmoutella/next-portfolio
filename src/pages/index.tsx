import { Landing as Template } from "@/templates";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import Link from "next/link";

export default function Home() {
  const { text } = useTranslation();

  const toCareer = new URL("/career", window.location.origin).href;
  const toServices = new URL("/business", window.location.origin).href;

  const ctaClasses = `bg-primary-medium md:bg-white text-white md:text-primary-dark font-semibold text-[14px] border-[1px] border-primary-dark px-[24px] md:px-[40px] py-[14px] md:py-[10px] lg:py-[12px] rounded-[20px] md:rounded-[50px] max-w-[85%] md:max-w-[400px] lg:max-w-[430px] mx-auto`;

  return (
    <Template>
      <div className="text-gray-medium pt-[100px] md:pt-[120px] pb-[80px] mb-[20px] md:mb-[40px]">
        <div className="container">
          <h1 className="font-changa-one text-[28px] md:text-[32px] lg:text-[40px] text-center mb-[40px] md:mb-[30px]">
            {text.landing.title}
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-center">
            {text.landing.subtitle}
          </p>
        </div>
      </div>

      <div className="bg-primary-dark text-white">
        <div className="container pt-[60px] md:pt-[100px] pb-[200px]">
          <p className="text-[20px] lg:text-[24px] text-center font-semibold md:font-bold mx-auto mb-[40px] md:mb-[60px]">
            {text.landing.intro.hi}
          </p>
          <p className="text-[14px] md:text-[18px] lg:text-[20px] text-center max-w-[500px] lg:max-w-[600px] mx-auto text-regular">
            {text.landing.intro.description}
          </p>
        </div>
      </div>

      <div className="container max-w-[90%] lg:max-w-[900px] bg-white drop-shadow-md rounded-[20px] mt-[-80px] py-[40px] md:py-[60px] px-[24px] md:px-[100px] mx-auto text-center text-gray-medium mb-[80px]">
        <p className="mb-[40px] md:mb-[80px] font-semibold text-[18px] md:text-[20px]">
          {text.landing.effect}
        </p>
        <p className="mb-[28px] md:mb-[40px] md:text-[16px]">
          {text.landing.business.effect}
        </p>
        <div className={`${ctaClasses} mb-[70px] md:mb-[60px]`}>
          <Link href={toServices}>{text.landing.business.label}</Link>
        </div>
        <p className="mb-[28px] md:mb-[40px]">{text.landing.career.effect}</p>
        <div className={`${ctaClasses}`}>
          <Link href={toCareer}>{text.landing.career.label}</Link>
        </div>
      </div>
    </Template>
  );
}
