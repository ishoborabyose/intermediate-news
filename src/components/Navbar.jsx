import React from "react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="shadow-shadow1- bg-white fixed z-10 w-full">
      <div
        className={`flex justify-between duration-500 ease-in-out  items-center sm:py-1  max-w-7xl px-3 mx-auto ${
          scrolled ? "py-1" : "py-[21px]"
        }`}
      >
        {" "}
        {scrolled ? (
          <img
            className="object-cover w-[132px] cursor-pointer h-[45px]  sm:hidden "
            src="https://www.shutterstock.com/image-vector/modern-newspaper-logo-template-best-260nw-1283230096.jpg"
          />
        ) : (
          <img
            className="w-[381px] object-cover  cursor-pointer h-[50px] sm:hidden"
            src="https://www.shutterstock.com/image-vector/modern-newspaper-logo-template-best-260nw-1283230096.jpg"
          />
        )}
        <img className="object-cover sm:block hidden" src="/images/small.PNG" />
        <div className="flex items-center gap-[12px] sm:hidden ">
          <div className=" relative   flex mr-[1px] ">
            <div className=" absolute top-[30%] border-l pl-2 left-[360px]">
              <CiSearch className="w-5 h-5  cursor-pointer" />
            </div>
            <input
              placeholder="Search..."
              className="w-[400px] h-[42px] rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px]  pl-[12px]  border"
            />
          </div>
        </div>
        <div className="hidden  sm:flex gap-3">
          <button className="flex items-center gap-[5px] px-[0.3rem] w-fit">
            <CiHeart className="w-[42px] h-[42px] " />
          </button>
          <button className="py-[8.4px]  px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px] bg-white border border-[#1f1d21]">
            <CiSearch className="w-5 h-5  cursor-pointer" />
          </button>
          <button className="py-[8.4px] px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px] bg-white border border-[#1f1d21]">
            NL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
