import { Landing as Template } from "@/templates";

//Components
import Title from "@/pageComponents/home/Title";
import Section from "@/pageComponents/home/Section";

// Assets
import mockupIlustration from "@/assets/images/home/mockup_ilustration.svg";
import notebookIlustration from "@/assets/images/home/notebook_ilustration.svg";
import { useTranslation } from "@/providers/TranslationProvider";

export default function Home() {
  const { text } = useTranslation();

  return (
    <Template>
      <div className="mb-[80px]">
        <Title />
      </div>
      <Section
        description={text?.landing.services.description}
        btnLabel={text?.landing.services.label}
        btnUrl="#"
        imageUrl={mockupIlustration}
      />
      <Section
        description={text?.landing.career.description}
        btnLabel={text?.landing.career.label}
        btnUrl="#"
        imageUrl={notebookIlustration}
        reverse={true}
      />
    </Template>
  );
}
