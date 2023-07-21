import { useState } from "react";
import { motion, useAnimate } from "framer-motion";

const HighlightItem = ({ text }: { text: string }) => {
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
          logo
        </span>
      )}
    </motion.div>
  );
};

export default HighlightItem;
