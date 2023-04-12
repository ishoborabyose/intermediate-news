import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getNews } from "../features/news";

const Articles = () => {
  const { publisherId } = useParams();
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";
  const data = useSelector((state) => state.news.value);
  console.log("++++++++++++++++++");
  console.log(data);
  console.log("====================================");
  const dispatch = useDispatch();

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

  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-white max-w-7xl px-3 mx-auto pb-[64px] pt-40">
        <h1
          className={
            "text-[#1f1d21] text-[30px] leading-[48px] font-semibold mb-[24px]"
          }
        >
          Articles from {publisherId}
        </h1>

        <div className="grid sm:grid-cols-1 grid-cols-3 gap-6">
          {data.map((article, index) => {
            return (
              <div
                onClick={() => handleClick(article.url)}
                key={index}
                className=" border  group hover:shadow-hov3 hover:duration-300  rounded-md shadow-sm  duration-300 ease-in-out transition-all cursor-pointer"
              >
                <Link
                  to={`/article/${article.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-[200px]  overflow-clip">
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
