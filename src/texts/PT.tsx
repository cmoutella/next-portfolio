const texts = {
  landing: {
    services: {
      description:
        "Trabalho com a web desde 2017, nesses anos atuando como  tive contato com diversos aspectos de um produto digital. Da concepção de funcionalidades ao desenvolvimento, da análise de performance à ações voltadas para melhoria de SEO.",
      label: "o que eu posso fazer pelo seu site",
    },
    career: {
      description:
        "Já atuei em diferentes contextos, desenvolvendo sites e produtos simples e performáticos para mais de 60K usuários diários. Contribuí para equipes e processos mais organizados, melhorando a eficiência e entrosamento do time.",
      label: "o que eu posso fazer pelo seu time",
    },
  },
  career: {
    title: "Para o seu time",
    heroAlt: "Grupo de colegas reunidos trabalhando",
    degree: {
      title: "Formada em Ciência da Computação",
      alt: "Chapéu de formatura",
    },
    highlights: {
      title:
        "No mercado de técnologia desde 2017, veja algumas conquistas da minha carreira",
      list: [
        {
          description:
            "Desenvolvovi soluções para plataformas com mais de 300K usuários",
          company: "qc",
        },
        {
          description:
            "Participei de soluções para uma plataforma de dados sincronizados em tempo real",
          company: "runrun",
        },
        {
          description:
            "Participei de projeto que obteve aumento de mais de 30% em retenção de usuários recém cadastrados",
          company: "qc",
        },
        {
          description:
            "Desenvolvi pixel perfect landing pages para campanhas de vendas de sucesso",
          company: "qc",
        },
        {
          description: "Participei de ações estratégicas para melhoria de SEO",
          company: "qc",
        },
        {
          description:
            "Liderei grupos de 2 a 3 desenvolvedores para alcançarmos a solução",
          company: "carrefour",
        },
        {
          description:
            "Participei no planejamento da solução a ser implementada",
          company: "c6",
        },
        {
          description:
            "Organizei a estrutura de componentes utilizados em landing pages.",
          company: "qc",
        },
      ],
    },
    skills: {
      title: "Características profissionais",
      filters: [
        { name: "soft skills", type: "soft" },
        { name: "tecnologias", type: "tech" },
        { name: "metodologias", type: "method" },
        { name: "todas", type: "all" },
      ],
      lists: [
        [
          { name: "React", type: "tech" },
          { name: "HTML5", type: "tech" },
          { name: "Framer Motion", type: "tech" },
          { name: "Organização", type: "soft" },
          { name: "Rest API", type: "tech" },
          { name: "SCRUM", type: "method" },
          { name: "Styled Components", type: "tech" },
        ],
        [
          { name: "Liderança", type: "soft" },
          { name: "SOLID", type: "method" },
          { name: "Kanban", type: "method" },
          { name: "Typescript", type: "tech" },
          { name: "VTEX", type: "tech" },
          { name: "Ruby", type: "tech" },
          { name: "Javascript", type: "tech" },
          { name: "Criatividade", type: "soft" },
          { name: "TDD", type: "method" },
        ],
        [
          { name: "Tailwind", type: "tech" },
          { name: "CI/CD", type: "method" },
          { name: "Next.js", type: "tech" },
          { name: "Jest", type: "tech" },
          { name: "Design Petterns", type: "method" },
          { name: "DRY", type: "method" },
          { name: "GraphQL", type: "tech" },
          { name: "Redux", type: "tech" },
          { name: "Comunicação", type: "soft" },
        ],
      ],
    },
  },
  services: {
    title: "Para o seu negócio",
    subtitle: "Soluções  e serviços para alavancar seu négocio digital",
    heroAlt: "Duas analistas discutindo negócios",
    navigation: {
      design: {
        title: "Design",
        description:
          "<span style='font-weight: 600;'>Mais do que bonito</span>.</br> Um design eficiênte facilita o entendimento e leitura, ajuda aidentificar sua marca e a conectar seu cliente com o seu produto.",
        image:
          "Imagem de processo criativo,contém lâmpada, um lápis e uma engranagem",
      },
      development: {
        title: "Desenvolvimento",
        description:
          "Implemento e incremento seu produto com alta performance e excelente experiência.",
        image: "Imagem de navegador web com símbolo de engrenagem e código",
      },
      seo: {
        title: "SEO",
        description:
          "<span style='font-weight: 600;'>Search Engine Optimization</span>.</br>Estratégia essêncial para um maior alcance de um público mais qualificado e relevante para o seu negócio.",
        image: "Imagem navegador web com gráficos",
      },
    },
    design: {
      title: "Design",
      content: {
        define: {
          title: "Definir",
          description:
            "Entender e definir os objetivos do cliente para orientar o processo de design.",
        },
        research: {
          title: "Pesquisar",
          description:
            "Pesquisar referências de mercado e experiência para inspirar as interfaces criadas.",
        },
        design: {
          title: "Design",
          description:
            "Desenhar interfaces intuitivas e estratégicas para o seu negócio.",
        },
      },
    },
    development: {
      title: "Desenvolvimento",
      alt: "Imagem representando o ciclo de desenvolvimento",
      content: [
        "Implementação de <span style='font-weight: 600;'>sistemas, interfaces e experiências;</span>",
        "Desenvolvimento de Design System;",
        "Integração com outras ferramentas;",
        "Melhoria de performance;",
        "Aumento de confiabilidade com testes;",
        "Implementar, avaliar e melhorar;",
      ],
    },
    seo: {
      title: "SEO",
      description:
        "Analise o seu site e obtenha uma lista detalhada e priorizada com oportunidades de melhorias",
      alt: "Imagem de navegador web mostrando gráficos",
      content: [
        "Core Web Vitals;</span>",
        "Acessibilidade;",
        "Responsividade;",
        "Desempenho;",
      ],
    },
  },
};

export default texts;
