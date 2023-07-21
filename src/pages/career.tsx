import { Default as Template } from "@/templates";
import Image from "next/image";

//Components
import Hero from "@/components/Hero";
import HighlightItem from "@/pageComponents/career/Hightlight";
import Skills from "@/pageComponents/career/Skills";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/career/hero.jpg";
import cap from "@/assets/images/career/cap.png";

export default function Services() {
  const { text: content } = useTranslation();

  const marginBottom = (index: number) => (index > 3 ? "mb-0" : "mb-[20px]");
  const marginRight = (index: number) =>
    index === 3 || index === 7 ? "mr-0" : "mr-[16px]";

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
      <section className="pt-[100px] pb-[40px]">
        <div className="container">
          <h4 className="text-center text-gray-dark text-[24px] max-w-[500px] mx-auto mb-[40px]">
            {content.career.highlights.title}
          </h4>
          <div className="flex flex-wrap justify-center max-w-[1000px] mx-auto">
            {content.career.highlights.list.map(
              (item: string, index: number) => (
                <div
                  key={index}
                  className={`block ${marginBottom(index)} ${marginRight(
                    index
                  )}`}
                >
                  <HighlightItem text={item} />
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="pt-[60px] pb-[40px]">
        <div className="container">
          <div className="flex justify-between items-center rounded-[20px] border-[2px] border-terciary-pale py-[30px] px-[40px] max-w-[630px] mx-auto">
            <Image width={120} src={cap} alt={content.career.degree.alt} />
            <span className="text-[22px] text-gray-light font-medium tracking-wide ml-[20px]">
              {content.career.degree.title}
            </span>
          </div>
        </div>
      </section>
      <section className="py-[80px]">
        <div className="container">
          <h4 className="text-center text-gray-dark text-[24px] max-w-[500px] mx-auto mb-[30px]">
            {content.career.skills.title}
          </h4>
          <Skills />
        </div>
      </section>
    </Template>
  );
}
