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
      <div className="container relative pt-[70px] pb-[180px] max-w-[1100px]">
        <h4 className="absolute top-[-33px] left-[100px] text-[42px] text-primary-dark font-bold">
          {title}
        </h4>
        {children}
      </div>
    </article>
  );
};

export default PageSection;
