import { Default as Template } from "@/templates";

//Components
import Hero from "@/components/Hero";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/services/hero.jpg";
import ContentNavigation from "@/pageComponents/services/ContentNavigation";

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
    </Template>
  );
}
