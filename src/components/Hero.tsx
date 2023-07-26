import Image, { type StaticImageData } from "next/image";

type ClassesProps = {
  mainColor?: string;
  backgroundStyles: string;
};

type ImageProps = {
  src: StaticImageData;
  alt: string;
};

type HeroProps = {
  title: string;
  subtitle?: string;
  classes: ClassesProps;
  image: ImageProps;
};

const Hero = ({ title, subtitle, classes, image }: HeroProps) => {
  const titleParts = title.split(" ");
  const effectWord = titleParts[titleParts.length - 1];

  return (
    <section className={`w-full ${classes.mainColor}`}>
      <div
        className={`container relative flex justify-center items-center max-w-[1200px] ${classes.backgroundStyles}`}
        style={{ zIndex: 2 }}
      >
        <div className="w-full h-full absolute" style={{ zIndex: -1 }}>
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`flex flex-col items-center ${subtitle && "pt-[10px]"}`}
        >
          <h1
            className="uppercase text-center text-white text-[32px] md:text-[60px] font-paytone tracking-wider /// relative"
            style={{ zIndex: 2 }}
          >
            {title}
            <span
              className="text-primary-medium absolute right-0 bottom-0 translate-y-[-5px] md:translate-y-[-8px] translate-x-[-5px] md:translate-x-[-8px]"
              style={{ zIndex: -1 }}
            >
              {effectWord}
            </span>
          </h1>
          {subtitle && (
            <h3 className="text-white text-[14px] md:text-[18px] tracking-wider block mt-[20px]">
              {subtitle}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
