const OneArticle = ({ article }) => {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="bg-white max-w-3xl px-3 mx-auto sm:pt-20 pt-40">
      <div className="flex justify-between">
        <h1 className={`text-xl font-semibold text-gray-900 mb-10`}>
          {article.title}
        </h1>
      </div>
      <div className="grid sm:grid-cols-1  cursor-pointer gap-[24px]">
        <div
          onClick={() => handleClick(article.url)}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img
            className="object-cover h-96 w-full"
            src={article.urlToImage}
            alt={article.title}
          />
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={article.authorImage}
                  alt={article.title}
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
            <div className="block mt-2">
              <p className="mt-3 text-base text-gray-500">
                {article.description}
              </p>
              <p className="mt-3 space-x-1 text-sm text-gray-500 mb-4">
                This page is supposed to display the full text of the article,
                however, the news API we are using for this exercise project
                does not deliver the full text of the article. That’s why you
                are only seeing an article summary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneArticle;
