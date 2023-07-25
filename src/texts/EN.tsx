const texts = {
  navigation: [
    { name: "For your business", path: "/business" },
    { name: "Career", path: "/career" },
    // {name: 'Mentoria', path: '/menthorship'},
  ],
  landing: {
    title: "Web Designer and Developer",
    subtitle: "design to code: simply and shiny",
    intro: {
      hi: "Hi, I am Carolina.",
      description:
        "Since I started my developer career, over 7 years ago, I've worked remotly to companies and agencies, collaborating with many talented people to create and develop digital products for business and consumers.",
    },
    effect:
      "I love participating in the making of quality products and excellent experience",
    business: {
      effect:
        "As part of a team, or as a freelancer I create using most recent tools and techniques from the market, from design to SEO, from architecture to code design patters.",
      label: "See what I can do for your product",
    },
    career: {
      effect:
        "The team environment makes the life cycle of a product more rich, with a diverse collaborative team we get happier people and more dynamic businesses.",
      label: "See how I can contribute to your team",
    },
    menthor: {
      title: "HandsOn Menthorship",
      description:
        "Weekly group and individual live sessions and real challenges",
      label: "MORE",
    },
  },
  career: {
    title: "For your team",
    heroAlt: "Coworkers working together",
    degree: { title: "Bachelor in Computer Science", alt: "Graduation Cap" },
    highlights: {
      title:
        "In technology business since 2017, here are some highlights of my career",
      list: [
        {
          description: "Developed solutions for platforms with over 300K users",
          company: "qc",
        },
        {
          description:
            "Participated in solutions for a real time task management platform",
          company: "runrun",
        },
        {
          description:
            "Participated in a project that achieved an increase of 30% retention of recently subscribed users",
          company: "qc",
        },
        {
          description:
            "Developed pixel perfect landing pages for successful sales campaigns",
          company: "qc",
        },
        {
          description:
            "Took part on strategic actions to improve platform's SEO",
          company: "qc",
        },
        {
          description:
            "Leaded groups of 2 to 3 developers in the making of a solution",
          company: "carrefour",
        },
        {
          description:
            "Actively participated in refining and planing tasks for my team",
          company: "c6",
        },
        {
          description: "Organized codebase for landing pages components",
          company: "qc",
        },
      ],
    },
    skills: {
      title: "Características profissionais",
      filters: [
        { name: "soft skills", type: "soft" },
        { name: "technologies", type: "tech" },
        { name: "methodologies", type: "method" },
        { name: "all", type: "all" },
      ],
      lists: [
        [
          { name: "React", type: "tech" },
          { name: "HTML5", type: "tech" },
          { name: "Framer Motion", type: "tech" },
          { name: "Organization", type: "soft" },
          { name: "Rest API", type: "tech" },
          { name: "SCRUM", type: "method" },
          { name: "Styled Components", type: "tech" },
        ],
        [
          { name: "Leadership", type: "soft" },
          { name: "SOLID", type: "method" },
          { name: "Kanban", type: "method" },
          { name: "Typescript", type: "tech" },
          { name: "VTEX", type: "tech" },
          { name: "Ruby", type: "tech" },
          { name: "Javascript", type: "tech" },
          { name: "Criativity", type: "soft" },
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
          { name: "Comunication", type: "soft" },
        ],
      ],
    },
  },
  services: {
    title: "For your business",
    subtitle: "Services and solutions to boost your digital business",
    heroAlt: "Two analysts discussing business",
    navigation: {
      design: {
        title: "Design",
        description:
          "<span style='font-weight: 600;'>More than pretty</span>.</br> An efficient design facilitates reading and understanding, help identify your brand and connect your client with your product.",
        image:
          "Image of creative process, contains light bulb, a pencil and an engine piece",
      },
      development: {
        title: "Development",
        description:
          "Implement and evolve your product with high performance e excellent experience.",
        image: "Image of a web browser with engine and coding symbols",
      },
      seo: {
        title: "SEO",
        description:
          "<span style='font-weight: 600;'>Search Engine Optimization</span>.</br>Must have strategy if you are looking for a better reach of qualified and relevant public for your business.",
        image: "Image of a web browser showing graphs",
      },
    },
    design: {
      title: "Design",
      content: {
        define: {
          title: "Define",
          description:
            "Define and understand client's objectives to guide design process.",
        },
        research: {
          title: "Research",
          description:
            "Research market references and inspiring interface experiences .",
        },
        design: {
          title: "Design",
          description:
            "Design strategic and intuitive interfaces for your business.",
        },
      },
    },
    development: {
      title: "Development",
      alt: "Image representing development process",
      content: [
        "Implement <span style='font-weight: 600;'>systems, interfaces e experiences;</span>",
        "Design System development;",
        "Integrating with other tools;",
        "Inhance performance;",
        "Increase confiability with testing;",
        "Implement, evaluate e improve;",
      ],
    },
    seo: {
      title: "SEO",
      description:
        "Analise your website and get a detailed and prioritized list of enhancement opportunities ",
      alt: "Image of a web browser displaying graphs",
      content: [
        "Core Web Vitals;",
        "Accessibility;",
        "Responsive;",
        "Performance;",
      ],
    },
  },
};

export default texts;
