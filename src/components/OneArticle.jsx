const OneArticle = ({ article }) => {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="bg-white max-w-3xl px-3 mx-auto sm:pt-20 pt-40">
      <div className="flex justify-between">
        <h1
          className={`text-[#1f1d21]  text-[30px] leading-[48px] font-semibold mb-[24px]`}
        >
          {article.title}
        </h1>
      </div>
      <div className="grid sm:grid-cols-1   gap-[24px]">
        <div onClick={() => handleClick(article.url)} className="border ">
          <div className="overflow-clip">
            <img
              src={article.urlToImage}
              className={`hover:scale-150 duration-500 cursor-pointer  sm:h-full w-full object-cover object-`}
            />
          </div>

          <div className="px-[1rem] pt-[1rem] pb-[1.5rem]">
            <p className="text-[#1f1d21] text-base leading-[27.6px] mb-4">
              {article.description}
            </p>
            <p className="text-[#1f1d21] text-base leading-[27.6px] mb-4">
              This page is supposed to display the full text of the article,
              however, the news API we are using for this exercise project does
              not deliver the full text of the article. That’s why you are only
              seeing an article summary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
