import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./data";
import { getTopArticles } from "../features/articles";

const News = () => {
  const data = useSelector((state) => state.article.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      dispatch(getTopArticles(data.articles));
    };
    fetchDataAsync();
  }, [dispatch]);

  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="bg-white max-w-7xl px-3 mx-auto sm:pt-20 pt-40">
      <div className="flex justify-between">
        <h1
          className={`text-[#1f1d21]  text-[30px] leading-[48px] font-semibold mb-[24px]`}
        >
          HEADLINES
        </h1>
      </div>
      {}
      <div className="grid sm:grid-cols-1 grid-cols-3 gap-[24px]">
        {data &&
          data.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(item.url)}
                key={index}
                className={`${
                  index === 0
                    ? "col-span-3 sm:col-span-1 border  group hover:shadow-hov3 hover:duration-300  cursor-pointer"
                    : "border  group hover:shadow-hov3 hover:duration-300  cursor-pointer"
                }`}
              >
                <div className="overflow-clip">
                  <img
                    src={item.urlToImage}
                    className={`hover:scale-150 duration-500 cursor-pointer ${
                      index === 0
                        ? "h-[290px] sm:h-full w-full object-cover object-"
                        : "w-full object-cover sm:h-full h-[190px] "
                    } `}
                  />
                </div>

                <div className="px-[1rem] pt-[1rem] pb-[1.5rem]">
                  <h3 className="text-[#1f1d21] group-hover:text-[#bc0031] group-hover:underline sm:text-sm  text-base leading-[27.6px]  mb-4  font-semibold ">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
