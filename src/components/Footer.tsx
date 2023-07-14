import Signature from "./Signature";

const Footer = () => {
  return (
    <div className="bg-gray-light text-white py-[30px] h-[100px] ">
      <div className="container relative">
        <div className="text-[12px] translate-y-[30px] hidden sm:block">
          &copy; Designed @2021
        </div>
        <div className="bg-primary-medium p-[40px] pb-[20px] rounded-t-[50%] absolute right-0 top-[-170px] flex flex-col items-center">
          <div className="mb-[-16px] sm:mb-[40px]">
            <Signature height="40" color={"#fff"} />
          </div>
          <div className="text-[12px] translate-y-[30px] opacity-80 sm:hidden mb-5">
            &copy; Designed @2021
          </div>
          <p className="mb-[24px]">ola@carolinamoutella.com</p>
          <ul className="flex">
            <li className="mr-[16px]">{/* icon linkedin */}</li>
            <li className="mr-[16px]">{/* icon github */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
