const Footer = () => {
  return (
    <div className=" bg-white fixed bottom-0 z-50  border-t w-full">
      <div className="flex sm:flex-col sm:text-center justify-between max-w-6xl px-3 py-2 m-auto">
        <h4 className="text-[#1e1d28] text-[12.25px] leading-[19.9675px]">
          © 2023 NEWS FLOW, All rights reserved
        </h4>
        <ul className="flex  gap-6 text-[#1e1d28] text-[12.25px] leading-[19.9675px]">
          <li className="cursor-pointer hover:text-[#bc0031] hover:underline">
            Terms of Use
          </li>
          <li className="cursor-pointer hover:text-[#bc0031] hover:underline">
            Privacy
          </li>
          <li className="cursor-pointer hover:text-[#bc0031] hover:underline">
            policy
          </li>
          <li className="cursor-pointer hover:text-[#bc0031] hover:underline">
            Site Map
          </li>
          <li className="cursor-pointer hover:text-[#bc0031] hover:underline">
            EN
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
