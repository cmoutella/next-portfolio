import { Default as Template } from "@/templates";

//Components
import Hero from "@/components/Hero";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/career/hero.jpg";
import HighlightItem from "@/pageComponents/career/Hightlight";

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
      <section className="py-[80px]">
        <div className="container">
          <h4 className="text-center text-[24px] max-w-[500px] mx-auto mb-[40px]">
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
    </Template>
  );
}
