import Signature from "./Signature";

const Footer = () => {
  return (
    <div className="bg-gray-light text-white h-[100px] py-[30px]">
      <div className="container relative">
        <div className="text-[12px] translate-y-[30px] hidden sm:block">
          &copy; Designed @2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
