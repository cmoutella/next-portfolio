import { type ReactNode } from "react";

const PageSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="bg-gray-pinky">
      <div className="container relative pt-[70px] pb-[100px]">
        <h4 className="absolute top-[-37px] left-[100px] text-[42px] font-bold">
          {title}
        </h4>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
