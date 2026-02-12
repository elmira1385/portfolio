"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "@/api/axios";


type TAchivement = {
  id:string,
  year:string,
  icon:string,
  title: string,
  description: string,
  category: string
};
const Achivement = () => {

  const [myAchivements, setMyAchivements] = useState<TAchivement[]>([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get<TAchivement[]>("AllApi/myAchivment");
      setMyAchivements(data);
    };
    getMySkills();
  }, []);
  return (
    <div
      id="achievements"
      className="flex flex-col scroll-mt-30  gap-8 sm:px-46 px-6 pb-6"
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Achi</span>evements
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base ">
          These achievements highlight the real projects I’ve built and the
          results I delivered
        </p>
      </div>
      <div className=" w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center mb-8">
            <svg
              className="stroke-gray-500 dark:stroke-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="19" cy="5" r="1"></circle>
              <circle cx="5" cy="5" r="1"></circle>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="19" cy="19" r="1"></circle>
              <circle cx="5" cy="19" r="1"></circle>
            </svg>
            <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base">
              explore
            </p>
          </div>
          <div className="flex justify-end  gap-2 items-center mb-8">
            <button className="custom-prev rounded-full bg-primary-hover group border border-gray-300 dark:border-2 dark:border-gray-900 flex items-center w-10 h-10  justify-center transition">
              <svg
                className="stroke-[#344256] dark:group-hover:stroke-[#344256] group-hover:stroke-white dark:stroke-white fill-transparent"
                fill="#000000"
                width="18px"
                height="18px"
                viewBox="0 0 14 24"
                id="triple-left-sign"
                strokeWidth="3"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline id="primary" points="10 19 3 12 10 5"></polyline>
              </svg>
            </button>

            <button className="custom-next rounded-full bg-primary-hover border border-gray-300 group dark:border-2 dark:border-gray-900 flex items-center w-10 h-10  justify-center transition">
              <svg
                className="stroke-[#344256] dark:group-hover:stroke-[#344256] dark:stroke-white group-hover:stroke-white fill-transparent"
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 34 24"
                id="triple-right-sign"
                strokeWidth="3"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline id="primary" points="14 5 21 12 14 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          className="overflow-hidden w-full"
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={16}
          slidesPerView="auto"
          grabCursor={false}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {myAchivements.map((item) => (
            <SwiperSlide
             key={item.id}
              className="max-w-75 relative sm:max-w-85 shrink-0 p-6 m-2 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900 "
            >
              <div className="flex gap-2 items-center">
                <div className="p-2  text-primary flex justify-center items-center rounded-full bg-[#eaf1fc] dark:bg-[#152B4F]  ">
                  <img src={item.icon} alt={item.icon} />
                </div>
                <div className="flex flex-col ">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.year}
                  </p>
                  <h3 className="text-[16px] font-semibold text-gray dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base mt-2">
                {item.description}
              </p>
              <span className="inline-block text-[#2662d9] mt-4 px-3 py-1 text-sm bg-[#eaf1fc] dark:bg-[#152B4F] rounded-full">
                {item.category}
              </span>
            
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Achivement;
