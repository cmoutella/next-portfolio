import Image, { StaticImageData } from "next/image";

const DesignProcess = ({
  name,
  icon,
  description,
}: {
  name: string;
  icon: StaticImageData;
  description: string;
}) => {
  return (
    <div className="w-[230px] flex flex-col justify-center items-center mb-[32px] md:mb-0">
      <div className="flex flex-col justify-center items-center w-[200px] h-[200px] /// mb-[30px] /// bg-white drop-shadow-md rounded-full ">
        <Image
          src={icon}
          alt="ícone ilustrativo"
          width={80}
          className="opacity-40"
        />
        <span className="text-center text-[18px]">{name}</span>
      </div>
      <p className="text-center text-[14px]">{description}</p>
    </div>
  );
};

export default DesignProcess;
