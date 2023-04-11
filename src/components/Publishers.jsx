import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDataPublishers } from "./data";
import { getPublishers } from "../features/publishers";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Publishers = () => {
  const data = useSelector((state) => state.publisher.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchDataPublishers();
      dispatch(getPublishers(data.sources));
    };
    fetchDataAsync();
  }, [dispatch]);

  const handleClick = (publisherId) => {
    const navigate = useNavigate();
    navigate(`/publisher/${publisherId}`);
  };

  return (
    <div className="bg-white max-w-6xl px-3 mx-auto pb-[64px] mt-20">
      <h1
        className={`text-[#1f1d21]  text-[30px] leading-[48px] font-semibold mb-[24px]`}
      >
        Publishers
      </h1>

      <div className=" grid grid-cols-5 sm:grid-cols-1 gap-[24px] ">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#ffffff] cursor-pointer  group hover:shadow-hov3 hover:duration-300 ease-in-out rounded-sm py-[10px] px-[10px]  gap-[8px] border"
              >
                <div>
                  <Link
                    to={`/publisher/${item.id}/articles`}
                    className="text-sm sm:text-[18px] mb-[20px] group-hover:text-[#bc0031] group-hover:underline leading-[27.6px] font-semibold"
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Publishers;
