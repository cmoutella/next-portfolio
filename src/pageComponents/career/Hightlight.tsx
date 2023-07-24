import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import qc from "@/assets/images/career/qc.png";
import runrun from "@/assets/images/career/runrun.png";
import c6 from "@/assets/images/career/c6.png";
import carrefour from "@/assets/images/career/carrefour.png";

export type Company = "qc" | "runrun" | "carrefour" | "c6";

const COMPANY = {
  qc: {
    name: "QConcursos",
    image: qc,
  },
  runrun: {
    name: "Runrun.it",
    image: runrun,
  },
  carrefour: {
    name: "Carrefour",
    image: carrefour,
  },
  c6: {
    name: "C6 Bank",
    image: c6,
  },
};

const HighlightItem = ({
  text,
  company,
}: {
  text: string;
  company: Company;
}) => {
  const [scope, animate] = useAnimate();
  const [isVerse, setIsVerse] = useState(false);

  return (
    <motion.div
      className="text-gray-dark text-[12px] /// bg-gray-pinky rounded-[8px] h-[200px] w-[200px] flex justify-center items-center p-[24px]"
      onHoverStart={() => {
        animate(scope.current, { rotateY: [0, 180] }, { duration: 1 });
        animate("span", { opacity: 0 }, { duration: 1, delay: 1 });
        setIsVerse(true);
      }}
      onHoverEnd={() => {
        animate(scope.current, { rotateY: [180, 0] }, { duration: 1 });
        setIsVerse(false);
      }}
      ref={scope}
    >
      {!isVerse && <span className="text-center">{text}</span>}
      {isVerse && (
        <span id="logo" style={{ transform: "rotateY(180deg)" }}>
          <Image
            src={COMPANY[company].image}
            alt={COMPANY[company].name}
            width={80}
          />
        </span>
      )}
    </motion.div>
  );
};

export default HighlightItem;
