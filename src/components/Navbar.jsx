import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData } from "./data";
import { searchArticle } from "../features/articles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    const fetchDataAsync = async () => {
      const data = await fetchData(searchQuery);
      dispatch(searchArticle({ articles: data.articles, searchQuery }));
    };
    fetchDataAsync();
  }, [dispatch, searchQuery]);

  const performSearch = () => {
    const allArticles = data.articles.value;
    allArticles.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setSearchResults(results);
  };

  return (
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
      {searchResults.length > 0 && (
        <div className="w-full bg-white  shadow-lg">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-red-800">
                  <CiSearch className="text-white" />
                </span>
                <p className="ml-3 font-medium text-gray-900">
                  Search Results for "{searchQuery}"
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* {searchResults.map((article) => (
                <div
                  key={article.title}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <img
                    className="object-cover h-96 w-full"
                    src={article.urlToImage}
                    alt=""
                  />
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={article.authorImage}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {article.author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={article.publishedAt}>
                            {article.publishedAt}
                          </time>
                        </div>
                      </div>
                    </div>
                    <a href={article.url} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {article.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {article.description}
                      </p>
                    </a>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
