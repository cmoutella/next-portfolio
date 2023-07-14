import Image from "next/image";

import { Default as Template } from "@/templates";

//Components
import Section from "@/pageComponents/home/Section";
import Title from "@/pageComponents/home/Title";

// Assets
import mockupIlustration from "@/assets/images/home/mockup_ilustration.svg";
import notebookIlustration from "@/assets/images/home/notebook_ilustration.svg";

export default function Home() {
  return (
    <Template>
      <Title />
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
        reverse
      />
    </Template>
  );
}
