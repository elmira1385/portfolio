import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center py-12  bg-[#020817] dark:bg-[#0B1523] sm:px-40">
      <div className="flex flex-col justify-center items-center gap-4 sm:items-start ">
        <p className="text-xl text-primary font-bold">ESH.</p>
        <p className="text-[15px] sm:text-base font-normal text-gray flex flex-col gap-1.5 dark:text-gray-500 px-2 sm:px-0 sm:text-start text-center sm:w-120 ">
          Building elegant digital solutions with a focus on user experience and
          technical excellence.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:items-end ">
        <div className="flex gap-6 justify-center pb-6 pt-8 fill-white">
          <a href="https://github.com/elmira1385/">
            <svg className="stroke-gray-400"
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          </a>
          <a href="elmirashokriyan64@gmail.com"><svg className="stroke-gray-400"
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
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg></a>
          <svg className="stroke-gray-400"
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          
        </div>
        <div>
            <p className="text-[12px] text-gray-400 px-2 sm:text-start sm:px-0 text-center">© 2025 Elmira ShokriyanFard | Built with Next and Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
