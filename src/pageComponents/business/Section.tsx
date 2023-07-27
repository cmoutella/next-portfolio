import { type ReactNode } from "react";

const PageSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <article className="bg-white">
      <div className="container relative pt-[60px] pb-[120px] md:pt-[70px] md:pb-[180px] max-w-[1100px]">
        <h4
          className="absolute top-[-33px] left-[50%] md:left-[100px] text-[32px] md:text-[42px] text-primary-dark text-center font-bold"
          style={{ transform: "translateX(-50%)" }}
        >
          {title}
        </h4>
        {children}
      </div>
    </article>
  );
};

export default PageSection;
