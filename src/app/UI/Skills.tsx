import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col  gap-12 sm:px-46 px-6 pb-50 pt-40">
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Sk</span>ills
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" x2="20" y1="19" y2="19"></line>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Programming Languages
            </h3>
          </div>
          <div className="flex gap-2">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              JavaScript
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              TypeScript
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              HTML/CSS
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Frontend Development
            </h3>
          </div>
          <div className="flex gap-2">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              React
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Next.js
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Tailwind
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Tools & Technologies
            </h3>
          </div>
          <div className="flex gap-2">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Git
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Vercel
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Scrum/Jira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
