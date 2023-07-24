import { Landing as Template } from "@/templates";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";

export default function Home() {
  const { text } = useTranslation();

  return (
    <Template>
      <div className="mb-[40px] py-[60px] text-gray-medium">
        <div className="container">
          <h1 className="font-changa-one text-[40px] text-center mb-[30px]">
            {text.landing.title}
          </h1>
          <p className="text-[24px] text-center">{text.landing.subtitle}</p>
        </div>
      </div>
      <div className="bg-primary-dark text-white">
        <div className="container pt-[60px] pb-[160px]">
          <p className="text-[24px] text-center font-bold mx-auto mb-[30px]">
            {text.landing.intro.hi}
          </p>
          <p className="text-[20px] text-center max-w-[600px] mx-auto text-regular">
            {text.landing.intro.description}
          </p>
        </div>
      </div>
      <div className="w-[900px] bg-white drop-shadow-md rounded-[20px] mt-[-80px] py-[60px] px-[100px] mx-auto text-[20px] text-center text-gray-medium mb-[80px]">
        <p className="mb-[80px] font-semibold">{text.landing.effect}</p>
        <p className="mb-[60px]">{text.landing.business.effect}</p>
        <button className="bg-white border-[1px] border-primary-dark text-primary-dark px-[60px] py-[16px] rounded-[50px] mb-[80px]">
          {text.landing.business.label}
        </button>
        <p className="mb-[60px]">{text.landing.career.effect}</p>
        <button className="bg-white border-[1px] border-primary-dark text-primary-dark px-[60px] py-[16px] rounded-[50px]">
          {text.landing.career.label}
        </button>
      </div>
    </Template>
  );
}
