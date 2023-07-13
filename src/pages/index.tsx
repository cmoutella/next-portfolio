import Image from "next/image";

import { Default as Template } from "@/templates";

// Assets
import mockupIlustration from "@/assets/images/home/mockup_ilustration.svg";
import notebookIlustration from "@/assets/images/home/notebook_ilustration.svg";
import Section from "@/pageComponents/home/Section";

export default function Home() {
  return (
    <Template>
      <section className="page-header">
        <div className="container">
          <h1 className="text-[35px] sm:text-[69px] font-bold text-gray-light font-chaga-one /// max-w-[240px] sm:max-w-[600px] /// z-2 mt-[30px] mx-auto relative">
            Designer{" "}
            <span className="text-primary-light text-[120px] sm:text-[220px] font-extra-bold font-paytone /// absolute -z-1 start-0 top-[30%] translate-x-[-50%] translate-y-[-50%]">
              &
            </span>{" "}
            Desenvolvedora
          </h1>
        </div>
      </section>
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
