import { Default as Template } from "@/templates";
import Image from "next/image";

//Components
import Hero from "@/components/Hero";
import HighlightItem, {
  type Company,
} from "@/pageComponents/career/Hightlight";
import Skills from "@/pageComponents/career/Skills";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/career/hero.jpg";
import cap from "@/assets/images/career/cap.png";

type HighlightItem = {
  description: string;
  company: Company;
};

export default function Services() {
  const { text: content } = useTranslation();

  return (
    <Template>
      <Hero
        title={content.career.title}
        image={{
          src: heroImg,
          alt: content.career.heroAlt,
        }}
        classes={{
          mainColor: "bg-gray-darker",
          backgroundStyles: "h-[400px]",
        }}
      />

      <section className="pt-[60px] md:pt-[80px] pb-[40px]">
        <div className="container">
          <h4 className="text-center text-gray-dark text-[18px] md:text-[20px] lg:text-[24px] md:max-w-[500px] lg:max-w-[570px] mx-auto mb-[40px]">
            {content.career.highlights.title}
          </h4>
          <div className="flex flex-wrap justify-center max-w-[1000px] mx-auto">
            {content.career.highlights.list.map(
              (item: HighlightItem, index: number) => (
                <div key={index} className={`block mx-[8px] my-[10px]`}>
                  <HighlightItem
                    text={item.description}
                    company={item.company}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="md:pt-[60px] md:pb-[40px]">
        <div className="container">
          <div className="flex justify-center md:justify-between items-center rounded-[20px] border-[2px] border-terciary-pale py-[16px] px-[12px] md:pb-[8px] md:pt-[12px] md:px-[40px] max-w-[220px] md:max-w-[630px] mx-auto">
            <div className="w-[80px] md:w-[120px]">
              <Image src={cap} alt={content.career.degree.alt} />
            </div>
            <span className="text-[10px] md:text-[22px] text-center text-gray-light font-medium tracking-wide ml-[20px]">
              {content.career.degree.title}
            </span>
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="container">
          <h4 className="text-center text-gray-dark text-[18px] md:text-[24px] max-w-[500px] mx-auto mb-[18px] md:mb-[30px]">
            {content.career.skills.title}
          </h4>
        </div>
        <Skills />
      </section>
    </Template>
  );
}
