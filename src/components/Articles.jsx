import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../features/news";
import { CiSearch } from "react-icons/ci";

const Articles = () => {
  const { publisherId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

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
        `https://news-proxy.netlify.app/api/top-headlines?sources=${publisherId}&apiKey=${API_KEY}`
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
      <div className="shadow-shadow1- bg-white fixed z-10 w-full">
        <div
          className={`flex justify-between duration-500 ease-in-out sm:grid sm:grid-cols-2 items-center sm:py-1  max-w-7xl px-3 mx-auto ${
            scrolled ? "py-1 " : "py-[21px] "
          }`}
        >
          {scrolled ? (
            <img
              className="object-cover w-[132px]   cursor-pointer h-[45px]  "
              src="https://www.shutterstock.com/image-vector/modern-newspaper-logo-template-best-260nw-1283230096.jpg"
            />
          ) : (
            <img
              className="w-[381px] object-cover sm:w-[132px] sm:h-[45px]  cursor-pointer h-[50px]"
              src="https://www.shutterstock.com/image-vector/modern-newspaper-logo-template-best-260nw-1283230096.jpg"
            />
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
            "text-[#1f1d21] text-[30px] leading-[48px] font-semibold mb-[24px]"
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
                className="border group hover:shadow-hov3 hover:duration-300 rounded-md shadow-sm duration-300 ease-in-out transition-all cursor-pointer"
              >
                <Link
                  to={`/article/${article.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-[200px] overflow-clip">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="object-cover w-full h-full hover:scale-150 duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="px-4 py-2">
                    <h2 className="text-base font-medium text-[#1f1d21] group-hover:text-[#bc0031] group-hover:underline sm:text-sm  leading-[27.6px] mb-2">
                      {article.title}
                    </h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
