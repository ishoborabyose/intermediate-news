import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../features/news";
import { CiSearch } from "react-icons/ci";
import Footer from "./Footer";

const Articles = () => {
  const { publisherId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const BASE_URL = import.meta.env.VITE_NEWS_URL;

  const handleSearch = (event) => setSearchQuery(event.target.value);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.value);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch(
        `${BASE_URL}?sources=${publisherId}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      dispatch(getNews(data.articles));
    };
    fetchDataAsync();
  }, [publisherId, dispatch]);

  const filteredData = data.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (url) => (window.location.href = url);

  return (
    <div>
      <div className="shadow-shadow1- bg-white fixed z-30 w-full">
        <div
          className={`flex justify-between duration-500 ease-in-out sm:grid sm:grid-cols-2 items-center sm:py-1  max-w-6xl px-3 mx-auto ${
            scrolled ? "py-1 " : "py-[21px] "
          }`}
        >
          {scrolled ? (
            <div className=" text-white h-10 w-32 flex justify-center items-center rounded-lg shadow-sm relative">
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
            </div>
          ) : (
            <div className=" text-white h-[42px] w-48 sm:h-10 sm:w-32 flex justify-center items-center rounded-lg shadow-sm relative">
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
            </div>
          )}
          <div className="flex items-center gap-[12px] sm:hidden ">
            <div className=" relative   flex mr-[1px] ">
              <div className=" absolute top-[30%] border-l pl-2 left-[360px]">
                <CiSearch className="w-5 h-5  cursor-pointer" />
              </div>
              <input
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-[400px] h-[42px] rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px] pl-[12px] border"
              />
            </div>
          </div>
          <div className="hidden sm:flex gap-3">
            <div className="relative flex">
              <div className="absolute top-[30%] border-l pl-2 right-1">
                <CiSearch className="w-5 h-5 cursor-pointer" />
              </div>
              <input
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full h-[42px] rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px] pl-[12px] border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-7xl px-3 mx-auto pb-[64px] pt-40">
        <h1
          className={
            "text-gray-500 underline hover:text-[#bc0031] hover:no-underline cursor-pointer text-[30px] leading-[48px]  font-semibold mb-[24px]"
          }
        >
          Articles from {publisherId}
        </h1>

        <div className="grid sm:grid-cols-1 grid-cols-3 gap-6">
          {filteredData.map((article, index) => {
            return (
              <div
                onClick={() => handleClick(article.url)}
                key={index}
                className="border rounded-lg group hover:shadow-hov3 hover:duration-300  shadow-sm duration-300 ease-in-out transition-all cursor-pointer"
              >
                <Link
                  to={`/article/${article.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="overflow-clip relative">
                    <div className="bg-black opacity-25 group-hover:opacity-50 rounded-lg absolute w-full h-full z-10"></div>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="hover:scale-150 rounded-lg  duration-500 cursor-pointer w-full object-cover sm:h-full h-[190px]"
                    />
                    <p className="text-white group-hover:shadow-hov3 font-bold bg-red-900 group-hover:bg-white group-hover:text-red-900 group-hover:underline p-1 absolute bottom-2 left-2 rounded-md z-20">
                      Read More
                    </p>
                  </div>
                  <div className="px-4 py-2">
                    <h2 className="text-base font-medium text-[#1f1d21] sm:text-sm  leading-[27.6px] mb-2">
                      {article.title}
                    </h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
