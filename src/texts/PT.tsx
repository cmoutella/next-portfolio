const texts = {
  navigation: [
    { name: "Para seu negócio", path: "/business" },
    { name: "Carreira", path: "/career" },
    // {name: 'Mentoria', path: '/menthorship'},
  ],
  landing: {
    title: "Web Designer e Desenvolvedora",
    subtitle: "do design ao código: simples e brilhante",
    intro: {
      hi: "Olá, meu nome é Carolina.",
      description:
        "Desde que iniciei minha carreira como desenvolvedora, há mais de 6 anos, trabalhei remotamente para empresas e agências, colaborando com muita gente talentosa para criar e crescer produtos digitais para negócios e consumidores.",
    },
    effect:
      "Sou apaixonada por ver projetos e produtos ganharem forma, transformando-se em belos designs, e proporcionar um toque especial a cada experiência.",
    business: {
      effect:
        "Desbloqueie o potencial dos seus projetos com a minha expertise! Seja como parte de uma equipe dinâmica ou como freelancer dedicado, eu crio soluções excepcionais utilizando técnicas avançadas e ferramentas líderes de mercado. Desde designs cativantes até otimização de SEO, e desde arquitetura robusta até padrões de código impecáveis, eu entrego excelência em cada etapa",
      label: "Veja o que eu posso fazer pelo seu produto",
    },
    career: {
      effect:
        "Com experiência e expertise, estou preparado para impulsionar a colaboração, a motivação e o sucesso do seu time.",
      label: "Veja como eu posso contribuir pro seu time",
    },
    menthor: {
      title: "Mentoria HandsOn",
      description:
        "Sessões semanais em grupo e individuais, ao vivo e com desafios reais",
      label: "SAIBA MAIS",
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
      //DESIGN SYSTEM
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
            "Desenvolvi pixel perfect landing pages para campanhas de vendas de sucesso",
          company: "qc",
        },
        {
          description:
            "Desenvolvi soluções para uma plataforma de dados sincronizados entre usuários em tempo real",
          company: "runrun",
        },
        {
          description:
            "Participei de projeto que obteve aumento de mais de 30% em retenção de usuários recém cadastrados",
          company: "qc",
        },
        {
          description:
            "Desenvolvi um projeto complexo de gerenciamento de chaves pix com integração com o BACEN",
          company: "c6",
        },
        {
          description: "Participei de ações estratégicas para melhoria de SEO",
          company: "qc",
        },
        {
          description:
            "Participei do desenvolvimento e manutenção do Design System",
          company: "c6",
        },
        {
          description:
            "Liderei time de 2 a 3 desenvolvedores no desenvolvimento de soluções para ecommerce",
          company: "carrefour",
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
          { name: "Bom humor", type: "soft" },
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
  business: {
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
