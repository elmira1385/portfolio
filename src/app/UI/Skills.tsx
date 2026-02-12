"use client";

import { useEffect, useState } from "react";
import axios from "@/api/axios";

type TSkills = {
  id: string;
  title: string;
  icon: string;
  description: string[];
};
const Skills = () => {
  const [mySkills, setMySkills] = useState<TSkills[]>([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get<TSkills[]>("AllApi/mySkilles");
      setMySkills(data);
    };
    getMySkills();
  }, []);
  
  return (
    <div
      id="skills"
      className="flex flex-col  gap-12 sm:px-46 px-6 pb-40 pt-30"
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Sk</span>ills
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base ">
          Focused on building modern, scalable, and user‑friendly web
          applications.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 sm:gap-6 ">
        {mySkills.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden flex flex-col  gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900"
          >
            <div className="flex gap-3 items-center">
              <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
                <img src={item.icon} alt={item.icon} />
              </div>
              <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
                {item.title}
              </h3>
            </div>
            <div className="flex gap-2 flex-wrap">
              {item.description.map((description, index) => (
                <p
                  key={index}
                  className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]"
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
