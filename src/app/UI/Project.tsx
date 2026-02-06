"use client";

import { useEffect, useState } from "react";

import axios from "@/api/axios";

type TProjects = {
  id: string;
  img: string;
  svg: string;
  title: string;
  description: string;
  features: string[];
  button1: string;
  href: string;
  liveProject:string,
  button2: string;
};
const Project = () => {
  const [projects, setProjects] = useState<TProjects[]>([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get<TProjects[]>("AllApi/myProjects");
      setProjects(data);
    };
    getMySkills();
  }, []);
  const [isShowMore, setIsShowMore] = useState(false);

  const itemShow = projects.slice(0, 3);
  const itemHide = projects.slice(3, 9);
  return (
    <div
      id="projects"
      className="flex flex-col scroll-mt-30 gap-10 sm:px-46 px-6 pb-6 pt-4 sm:pt-0 "
    >
      <div className="flex flex-col gap-6  ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Pro</span>jects
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
      </div>
     <div className="flex flex-col gap-6 w-full justify-center items-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full  gap-6  ">
        {itemShow.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-92 justify-between  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900"
            >
              <div className="relative group">
                <img
                  className="object-cover w-full rounded-t-xl"
                  src={item.img}
                  alt=""
                />
                <div className="hidden group-hover:block">
                  <div className=" w-full flex justify-center items-center h-44.5 rounded-t-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                    <div className="bg-white rounded-full p-2 z-20">
                      <img src={item.svg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative overflow-hidden flex-col  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
                <h3 className="text-xl font-bold text-gray dark:text-white ">
                  {item.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-500 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {item?.features.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={item.href}
                    className="bg-[#f7faff] border-2 border-[#eaf1fc] hover:bg-[#2662d9] dark:bg-transparent dark:text-white dark:hover:text-black dark:border-gray-900 self-start flex gap-2 items-center px-3 py-2 rounded-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <p className="text-sm font-medium ">Github</p>
                  </a>
                  <a href={item.liveProject} className="bg-[#f7faff] border-2 border-[#eaf1fc] hover:bg-[#2662d9] dark:bg-transparent dark:text-white dark:hover:text-black dark:border-gray-900 self-start flex gap-2 items-center px-3 py-2 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    <p className="text-sm font-medium ">Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isShowMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full  gap-6   ">
          {itemHide.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col max-w-92 justify-between  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900"
              >
                <div className="relative group">
                  <img
                    className="object-cover w-full rounded-t-xl"
                    src={item.img}
                    alt=""
                  />
                  <div className="hidden group-hover:block">
                    <div className=" w-full flex justify-center items-center h-44.5 rounded-t-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                      <div className="bg-white rounded-full p-2 z-20">
                        <img src={item.svg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex relative overflow-hidden flex-col  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
                  <h3 className="text-xl font-bold text-gray dark:text-white ">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-500 text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {item?.features.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={item.href}
                      className="bg-[#f7faff] border-2 border-[#eaf1fc] hover:bg-[#2662d9] dark:bg-transparent dark:text-white dark:hover:text-black dark:border-gray-900 self-start flex gap-2 items-center px-3 py-2 rounded-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <p className="text-sm font-medium ">Github</p>
                    </a>
                    <button className="bg-[#f7faff] border-2 border-[#eaf1fc] hover:bg-[#2662d9] dark:bg-transparent dark:text-white dark:hover:text-black dark:border-gray-900 self-start flex gap-2 items-center px-3 py-2 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      <a href={item.liveProject} className="text-sm font-medium ">Live Demo</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
     </div>

      {isShowMore ? (
        <button
          onClick={() => {
            setIsShowMore(false);
          }}
          className="flex items-center justify-center gap-2  rounded-md text-sm font-medium  transition-all duration-300 border border-gray-200 hover:bg-[#2662d9] hover:text-white  dark:text-white dark:border-gray-900 dark:hover:text-black self-center  px-4 py-2 group"
        >
          <span>Show Less</span>
          <svg
            className="group-hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={() => {
            setIsShowMore(true);
          }}
          className="flex items-center justify-center gap-2  rounded-md text-sm font-medium  transition-all duration-300 border border-gray-200 hover:bg-[#2662d9] hover:text-white hover:gap-3 dark:text-white dark:border-gray-900 dark:hover:text-black self-center px-4 py-2 group"
        >
          <span>Show More Projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Project;
