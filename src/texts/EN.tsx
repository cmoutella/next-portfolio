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
      "I am passionate about seeing projects and products go from the idea to beautiful designs, and giving a special touch to each experience.",
    business: {
      effect:
        "Unlock the potential of your projects with my expertise! Whether as part of a dynamic team or as a dedicated freelancer, I craft exceptional solutions using cutting-edge techniques and industry-leading tools. From captivating designs to SEO optimization, and from robust architecture to impeccable code standards, I deliver excellence at every stage.",
      label: "Find out what I can do for your product",
    },
    career: {
      effect:
        "With experience and expertise, I am ready to boost collaboration, motivation, and your team's success.",
      label: "Find out how I can contribute to your team",
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
            "Developed pixel perfect landing pages for successful sales campaigns",
          company: "qc",
        },
        {
          description:
            "Participated in solutions for a real time task management platform",
          company: "runrun",
        },
        {
          description:
            "Participated in a project that successfully achieved a 30% increase in retention among recently subscribed users.",
          company: "qc",
        },
        {
          description:
            "I developed a complex project for managing PIX keys with integration with the Central Bank (BACEN)",
          company: "qc",
        },
        {
          description:
            "Participated in strategic actions aimed at improving the platform's SEO.",
          company: "qc",
        },
        {
          description:
            "participated in the development and maintenance of the Design System.",
          company: "c6",
        },
        {
          description:
            "I led a team of 2 to 3 developers in the development of e-commerce solutions",
          company: "carrefour",
        },
      ],
    },
    skills: {
      title: "Skills",
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
          { name: "Upbeat", type: "soft" },
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
