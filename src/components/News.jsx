import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "./data";
import { getTopArticles } from "../features/articles";
import OneArticle from "./OneArticle";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const data = useSelector((state) => state.article.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      dispatch(getTopArticles(data.articles));
    };
    fetchDataAsync();
  }, [dispatch]);

  const handleClick = (article) => {
    setSelectedArticle(article);
  };
  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <OneArticle article={selectedArticle} onBackClick={handleBackClick} />
    );
  }
  return (
    <div className="bg-white max-w-6xl  px-3 mx-auto sm:pt-20 pt-40">
      <div className="flex justify-between">
        <h1
          className={`text-gray-500 underline hover:text-[#bc0031] hover:no-underline cursor-pointer text-[30px] leading-[48px]  font-semibold mb-[24px]`}
        >
          News
        </h1>
      </div>
      <div className="grid sm:grid-cols-1  grid-cols-4 gap-[24px]">
        {data &&
          data.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className={` rounded-lg group hover:shadow-hov3  sm:col-span-1 border  group hover:duration-300  cursor-pointer ${
                  index === 0 ? "col-span-2 " : ""
                } ${index === 5 ? "col-span-2 " : ""} ${
                  index === 6 ? "col-span-4 " : ""
                }  ${index === 7 ? "col-span-2 " : ""} `}
              >
                <div className="overflow-clip relative">
                  <div className="bg-black opacity-25 group-hover:opacity-50 rounded-lg absolute w-full h-full z-10"></div>
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="hover:scale-150 rounded-lg  duration-500 cursor-pointer w-full object-cover sm:h-full h-[190px]"
                  />
                  <p className="text-white group-hover:shadow-hov3 font-bold bg-red-900 group-hover:bg-white group-hover:text-red-900 group-hover:underline p-1 absolute bottom-2 left-2 rounded-md z-20">
                    Read More
                  </p>
                </div>

                <div className="px-[1rem] pb-4 pt-[1rem]">
                  <h2 className="text-base font-medium text-[#1f1d21] sm:text-sm  leading-[27.6px] mb-2">
                    {item.title}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
