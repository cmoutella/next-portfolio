import { type ReactNode } from "react";

const PageSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <article className="bg-gray-pinky">
      <div className="container relative pt-[70px] pb-[100px] max-w-[1100px]">
        <h4 className="absolute top-[-33px] left-[100px] text-[42px] font-bold">
          {title}
        </h4>
        {children}
      </div>
    </article>
  );
};

export default PageSection;
