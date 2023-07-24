import Image, { StaticImageData } from "next/image";

// Assets
import designImg from "@/assets/images/services/design.png";
import developmentImg from "@/assets/images/services/development.png";
import seoImg from "@/assets/images/services/seo.png";
import { useTranslation } from "@/providers/TranslationProvider";

type ImageProps = {
  src: StaticImageData;
  alt: string;
};

const ItemHeader = ({ title, image }: { title: string; image: ImageProps }) => {
  return (
    <button className="flex flex-col justify-center items-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={80}
        className="mb-[8px] opacity-50"
      />
      <span className="text-center font-bold text-gray-dark">{title}</span>
    </button>
  );
};

const ContentNavigation = () => {
  const { text } = useTranslation();

  return (
    <div className="pt-[60px] pb-[90px]">
      <div className="container flex justify-around">
        <div className="mx-[20px] w-[280px] flex flex-col items-center justify-start">
          <ItemHeader
            title={text.services.navigation.design.title}
            image={{
              src: designImg,
              alt: text.services.navigation.design.alt,
            }}
          />
          <p
            className="text-center text-[14px] mt-[24px]"
            dangerouslySetInnerHTML={{
              __html: text.services.navigation.design.description,
            }}
          ></p>
        </div>
        <div className="mx-[20px] w-[280px] flex flex-col items-center justify-start">
          <ItemHeader
            title={text.services.navigation.development.title}
            image={{
              src: developmentImg,
              alt: text.services.navigation.development.alt,
            }}
          />
          <p
            className="text-center text-[14px] mt-[24px]"
            dangerouslySetInnerHTML={{
              __html: text.services.navigation.development.description,
            }}
          ></p>
        </div>
        <div className="mx-[20px] w-[280px] flex flex-col items-center justify-start">
          <ItemHeader
            title={text.services.navigation.seo.title}
            image={{ src: seoImg, alt: text.services.navigation.seo.alt }}
          />
          <p
            className="text-center text-[14px] mt-[24px]"
            dangerouslySetInnerHTML={{
              __html: text.services.navigation.seo.description,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ContentNavigation;
