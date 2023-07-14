import { Default as Template } from "@/templates";

//Components
import Title from "@/pageComponents/home/Title";
import Section from "@/pageComponents/home/Section";

// Assets
import mockupIlustration from "@/assets/images/home/mockup_ilustration.svg";
import notebookIlustration from "@/assets/images/home/notebook_ilustration.svg";

export default function Home() {
  return (
    <Template>
      <div className="mb-[80px]">
        <Title />
      </div>
      <Section
        description="Trabalho com design gráfico voltado para a web, criando peças para
              marketing digital e projetos completos de UI."
        btnLabel="Conheça meu trabalho"
        btnUrl="#"
        imageUrl={mockupIlustration}
      />
      <Section
        description="Sou desenvolvedora front-end há mais de 5 anos. Ao longo da minha
        carreira tive oportunidade de trabalhar em projetos de sites e
        produtos digitais, e customização de layouts."
        btnLabel="Veja o que eu posso fazer"
        btnUrl="#"
        imageUrl={notebookIlustration}
        reverse={true}
      />
    </Template>
  );
}
