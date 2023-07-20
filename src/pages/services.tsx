import { Default as Template } from "@/templates";

//Components
import Hero from "@/components/Hero";

// Assets
import { useTranslation } from "@/providers/TranslationProvider";
import heroImg from "@/assets/images/services/hero.jpg";

export default function Services() {
  const { text: content } = useTranslation();

  return (
    <Template>
      <Hero
        title="para o seu negócio"
        subtitle="Soluções  e serviços para alavancar seu négocio digital"
        image={{
          src: heroImg,
          alt: "pipou",
        }}
        classes={{
          mainColor: "bg-gray-darker",
          backgroundStyles: "h-[400px]",
        }}
      />
    </Template>
  );
}
