import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const { publisherId } = useParams();
  const [articles, setArticles] = useState([]);
  const API_KEY = "a1a54883b8e54f7c86caf9b352e6610a";

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${publisherId}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    };
    fetchDataAsync();
  }, [publisherId]);

  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="bg-white max-w-7xl px-3 mx-auto pb-[64px] mt-20">
      <h1
        className={
          "text-[#1f1d21] text-[30px] leading-[48px] font-semibold mb-[24px]"
        }
      >
        Articles from {publisherId}
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {articles.map((article, index) => {
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
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="object-cover w-full h-full"
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
  );
};

export default Articles;
