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
        title={content.services.title}
        subtitle={content.services.subtitle}
        image={{
          src: heroImg,
          alt: content.services.heroAlt,
        }}
        classes={{
          mainColor: "bg-gray-darker",
          backgroundStyles: "h-[400px]",
        }}
      />
      <ContentNavigation />
      <PageSection title={content.services.design.title}>
        <div className="flex justify-around items-center text-gray-darker">
          <DesignProcess
            name={content.services.design.content.define.title}
            icon={targetImg}
            description={content.services.design.content.define.description}
          />
          <DesignProcess
            name={content.services.design.content.research.title}
            icon={researchImg}
            description={content.services.design.content.research.description}
          />
          <DesignProcess
            name={content.services.design.content.design.title}
            icon={designImg}
            description={content.services.design.content.design.description}
          />
        </div>
      </PageSection>
      <PageSection title={content.services.development.title}>
        <div className="flex justify-around items-center text-gray-darker">
          <div>
            {content.services.development.content.map(
              (item: string, index: number) => (
                <p
                  key={index}
                  className="mb-[10px] text-[16px]"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                ></p>
              )
            )}
          </div>
          <Image
            src={processImg}
            alt={content.services.development.alt}
            width={200}
            className="opacity-60"
          />
        </div>
      </PageSection>
      <PageSection title={content.services.seo.title}>
        <div className="flex justify-around items-center text-gray-darker">
          <div className="max-w-[400px]">
            <p className="mb-[20px]">{content.services.seo.description}</p>
            {content.services.seo.content.map((item: string, index: number) => (
              <p
                key={index}
                className="mb-[8px] text-[16px]"
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              ></p>
            ))}
          </div>
          <Image
            src={analysisImg}
            alt={content.services.seo.alt}
            width={200}
            className="opacity-60"
          />
        </div>
      </PageSection>
    </Template>
  );
}
