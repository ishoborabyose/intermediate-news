import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData } from "../data/data";
import { searchArticle } from "../service/articleSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      const fetchDataAsync = async () => {
        const data = await fetchData(searchQuery);
        dispatch(searchArticle({ articles: data.articles, searchQuery }));
      };
      fetchDataAsync();
    }
  }, [dispatch, searchQuery]);

  const performSearch = () => {
    const allArticles = data.articles.value;
    allArticles.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="shadow-shadow1- bg-white fixed z-30 w-full">
      <div
        className={`flex justify-between duration-500 ease-in-out sm:grid sm:grid-cols-2 items-center sm:py-1  max-w-6xl px-3 mx-auto ${
          scrolled ? "py-1 " : "py-[21px] "
        }`}
      >
        {scrolled ? (
          <Link
            to="/"
            className=" text-white h-10 w-32 flex justify-center items-center rounded-lg shadow-sm relative"
          >
            <span className="absolute top-0 left-0 w-10  h-10 flex justify-center items-center  rounded-full">
              <span className="text-sm font-extrabold  text-gray-800 transform -rotate-45">
                NEWS
              </span>
            </span>
            <h1 className="font-bold text-sm tracking-widest uppercase">
              <span className="relative z-10 text-gray-500 transform -rotate-45 mr-1 text-xs">
                f
              </span>
              <span className="relative z-10 text-[#bc0031] transform -rotate-45 text-xs">
                low
              </span>
            </h1>
          </Link>
        ) : (
          <Link
            to="/"
            className=" text-white h-[42px] w-48 sm:h-10 sm:w-32 flex justify-center items-center rounded-lg shadow-sm relative"
          >
            <span className="absolute top-0 left-0 w-14 h-10 sm:w-10  sm:h-10  flex justify-center items-center  rounded-full">
              <span className="text-base sm:text-sm font-extrabold  text-gray-800 transform -rotate-45">
                NEWS
              </span>
            </span>
            <h1 className="font-bold text-lg sm:text-sm  tracking-widest uppercase">
              <span className="relative z-10 text-gray-500 transform -rotate-45 mr-1">
                f
              </span>
              <span className="relative z-10 text-[#bc0031] transform -rotate-45">
                low
              </span>
            </h1>
          </Link>
        )}
        <div className="flex items-center gap-[12px] sm:hidden ">
          <div className=" relative flex mr-[1px] ">
            <div className=" absolute top-[30%] border-l pl-2 left-[360px]">
              <CiSearch
                onClick={() => performSearch()}
                className="w-5 h-5  cursor-pointer"
              />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-[400px] h-[42px] rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px]  pl-[12px]  border"
            />
          </div>
        </div>
        <div className="hidden  sm:flex gap-3">
          <div className="relative flex">
            <div className="absolute  top-[30%] border-l pl-2 right-1">
              <CiSearch
                onClick={() => performSearch()}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full h-[42px]  rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px] pl-[12px] border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
