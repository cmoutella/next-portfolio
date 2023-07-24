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
    <div className="w-[230px] flex flex-col justify-center">
      <div className="rounded-full flex flex-col justify-center items-center bg-white w-[200px] h-[200px] drop-shadow-md mb-[30px]">
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
