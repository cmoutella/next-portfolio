import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  btnClasses?: string;
  label: string;
  linkUrl: string;
  icon?: ReactNode;
  size?: "small" | "regular" | "large";
  width?: "extrathin" | "thin" | "regular" | "large";
};

const LinkButton = ({
  btnClasses,
  label,
  linkUrl,
  icon,
  size = "regular",
  width = "thin",
}: ButtonProps) => {
  const btnSize = {
    small: "px-[4px]",
    regular: "px-[8px]",
    large: "px-[16px]",
  };

  const btnWidth = {
    extrathin: "py-[1px]",
    thin: "py-[2px]",
    regular: "py-[4px]",
    large: "py-[8px]",
  };

  return (
    <Link
      href={linkUrl}
      className={`lex items-center m-auto md:m-0 mb-5 md:mb-0 mt-2 ${btnClasses} ${btnSize[size]} ${btnWidth[width]}`}
    >
      {label}
      {icon}
    </Link>
  );
};

export default LinkButton;
