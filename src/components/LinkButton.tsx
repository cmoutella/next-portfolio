import Link from "next/link";
import { ReactNode } from "react";

type ButtonSizes = "small" | "regular" | "large" | "extralarge";
type ButtonWidth = "thin" | "regular" | "large";
type ButtonPreConfig = "small" | "regular" | "large";

type size = ButtonPreConfig | [ButtonSizes, ButtonWidth];

type ButtonProps = {
  btnClasses?: string;
  label: string;
  linkUrl: string;
  icon?: ReactNode;
  size: size;
};

const LinkButton = ({
  btnClasses,
  label,
  linkUrl,
  icon,
  size,
}: ButtonProps) => {
  const sizeConfig = {
    small: "px-[4px]",
    regular: "px-[8px]",
    large: "px-[16px]",
    extralarge: "px-[40px]",
  };

  const widthConfig = {
    thin: "py-[2px]",
    regular: "py-[4px]",
    large: "py-[8px]",
    extralarge: "py-[12px]",
  };

  const btnPreConfigs = {
    small: `${sizeConfig.regular} ${widthConfig.regular}`,
    regular: `${sizeConfig.regular} ${widthConfig.large}`,
    large: `${sizeConfig.extralarge} ${widthConfig.extralarge}`,
  };

  const padding = () => {
    if (typeof size === "string") {
      return btnPreConfigs[size];
    } else {
      return `${sizeConfig[size[0]]} ${widthConfig[size[1]]}`;
    }
  };

  return (
    <Link
      href={linkUrl}
      className={`lex items-center m-auto md:m-0 mb-5 md:mb-0 mt-2 ${btnClasses} ${padding()}`}
    >
      {label}
      {icon}
    </Link>
  );
};

export default LinkButton;
