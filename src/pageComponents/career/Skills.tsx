import { useTranslation } from "@/providers/TranslationProvider";
import { useState } from "react";
import { motion } from "framer-motion";

type FilterItem = {
  name: string;
  type: string;
};

const SkillList = ({ list }: { list: FilterItem[] }) => {
  return (
    <div className="flex justify-center mb-[6px]">
      {list.map((item: FilterItem, i: number) => (
        <span
          key={i}
          className="mx-[4px] rounded-[4px] border-[1px] py-[8px] px-[12px] border-primary-medium"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

const Skills = () => {
  const { text } = useTranslation();
  const content = text.career.skills;

  const [skillsList1, setSkillsList1] = useState<FilterItem[]>(
    content.lists[0]
  );
  const [skillsList2, setSkillsList2] = useState<FilterItem[]>(
    content.lists[1]
  );
  const [skillsList3, setSkillsList3] = useState<FilterItem[]>(
    content.lists[2]
  );

  const filterColors = [
    "bg-primary-pale",
    "bg-terciary-pale",
    "bg-green-pale",
    "bg-gray-pale",
  ];

  const filter = (list: FilterItem[], type: string) => {
    return list.filter((item: FilterItem) => item.type === type);
  };

  const onFilter = (type: string) => {
    if (type === "all") {
      setSkillsList1(content.lists[0]);
      setSkillsList2(content.lists[1]);
      setSkillsList3(content.lists[2]);
    } else {
      setSkillsList1(filter(content.lists[0], type));
      setSkillsList2(filter(content.lists[1], type));
      setSkillsList3(filter(content.lists[2], type));
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-[24px]">
        {content.filters.map((filter: FilterItem, i: number) => (
          <div
            key={i}
            className={`text-[12px] font-semibold text-gray-medium tracking-wide uppercase rounded-[20px] py-[1px] px-[8px] mx-[8px] ${filterColors[i]}`}
            onClick={() => {
              onFilter(filter.type);
            }}
          >
            {filter.name}
          </div>
        ))}
      </div>
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          animate={{
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        >
          <SkillList list={skillsList1} />
        </motion.div>
        <motion.div
          animate={{
            x: [80, -120, 80],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        >
          <SkillList list={skillsList2} />
        </motion.div>
        <motion.div
          animate={{
            x: [-80, 120, -80],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.3,
          }}
        >
          <SkillList list={skillsList3} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
