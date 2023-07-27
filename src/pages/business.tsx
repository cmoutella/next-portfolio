import { Default as Template } from "@/templates";

//Components
import Hero from "@/components/Hero";
import ContentNavigation from "@/pageComponents/business/ContentNavigation";
import PageSection from "@/pageComponents/business/Section";
import Image from "next/image";
import DesignProcess from "@/pageComponents/business/DesignProcess";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/business/hero.jpg";
import researchImg from "@/assets/images/business/research.png";
import targetImg from "@/assets/images/business/target.png";
import designImg from "@/assets/images/business/web-design.png";
import processImg from "@/assets/images/business/incremental.png";
import analysisImg from "@/assets/images/business/analysis.png";

export default function Services() {
  const { text: content } = useTranslation();

  return (
    <Template>
      <Hero
        title={content.business.title}
        subtitle={content.business.subtitle}
        image={{
          src: heroImg,
          alt: content.business.heroAlt,
        }}
        classes={{
          mainColor: "bg-gray-darker",
          backgroundStyles: "h-[400px]",
        }}
      />

      <ContentNavigation />

      <PageSection title={content.business.design.title}>
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-gray-darker">
          <DesignProcess
            name={content.business.design.content.define.title}
            icon={targetImg}
            description={content.business.design.content.define.description}
          />
          <DesignProcess
            name={content.business.design.content.research.title}
            icon={researchImg}
            description={content.business.design.content.research.description}
          />
          <DesignProcess
            name={content.business.design.content.design.title}
            icon={designImg}
            description={content.business.design.content.design.description}
          />
        </div>
      </PageSection>

      <PageSection title={content.business.development.title}>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center text-gray-darker">
          <div className="max-w-[250px] md:max-w-[400px]">
            {content.business.development.content.map(
              (item: string, index: number) => (
                <p
                  key={index}
                  className="mb-[10px] text-[14px] md:text-[16px]"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                ></p>
              )
            )}
          </div>
          <div className="w-[150px] md:w-[200px] mb-[24px] md:mb-0">
            <Image
              src={processImg}
              alt={content.business.development.alt}
              className="opacity-60"
            />
          </div>
        </div>
      </PageSection>

      <PageSection title={content.business.seo.title}>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center text-gray-darker">
          <div className="max-w-[250px] md:max-w-[400px]">
            <p className="mb-[20px] text-[14px] md:text-[16px]">
              {content.business.seo.description}
            </p>
            {content.business.seo.content.map((item: string, index: number) => (
              <p
                key={index}
                className="mb-[8px] text-[14px] md:text-[16px] font-medium"
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              ></p>
            ))}
          </div>
          <div className="w-[150px] md:w-[200px] mb-[24px] md:mb-0">
            <Image
              src={analysisImg}
              alt={content.business.seo.alt}
              width={200}
              className="opacity-60"
            />
          </div>
        </div>
      </PageSection>
    </Template>
  );
}
