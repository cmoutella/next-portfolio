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
      <div className="container relative /// pt-[60px] pb-[120px] md:pt-[70px] md:pb-[180px] lg:pt-[70px] lg:pb-[180px] /// max-w-[450px] md:max-w-[780px] lg:max-w-[900px]">
        <h4 className="absolute top-[-27px] md:top-[-33px] ///  text-[32px] md:text-[42px] text-primary-dark text-center font-bold">
          {title}
        </h4>
        {children}
      </div>
    </article>
  );
};

export default PageSection;
