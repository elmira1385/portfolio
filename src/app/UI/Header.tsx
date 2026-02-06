"use client";

import { useTheme } from "@/store/useTheme";
import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  return (
    <div className="bg-[#F7FAFC]/98 z-50 dark:bg-[#020817]/97 sticky top-0 left-0 flex justify-between px-6  sm:justify-between py-5 items-center sm:px-40">
      <div>
        <a href="#home" className="text-xl text-primary font-bold">
          ESH.
        </a>
      </div>
      <div className="flex sm:gap-10 gap-2 items-center">
        <div className="flex sm:gap-8 hidden sm:hidden md:hidden lg:inline-flex xl:inline-flex ">
          <a
            href="#home"
            className="text-sm  dark:text-white dark:hover:text-[#2662d9] font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm dark:text-white   dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="text-sm dark:text-white dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
        <button
          className="hover:bg-[#2662d9] p-2.5 rounded-full  text-black dark:hover:bg-[#2662d9] dark:text-white group"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <div className="group-focus:rotate-180 duration-1000 group-hover:text-white">
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
                className="lucide lucide-sun h-4 w-4"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
          ) : (
            <div className="group-focus:rotate-12 duration-1000 group-hover:text-black">
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
                className="lucide lucide-moon h-4 w-4"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </div>
          )}
        </button>
        <a href="/myResume/ElmiraShokriyanResume.pdf" download className="bg-primary hidden sm:hidden md:hidden lg:inline-flex xl:inline-flex hover:cursor-pointer   py-2 px-2.5 rounded-lg text-sm font-bold text-white  dark:text-black">
          Resume
        </a>
        <button
          className="block sm:block md:block lg:hidden xl:hidden "
          onClick={() => {
            if (isOpenHeader) {
              setIsOpenHeader(false);
            } else {
              setIsOpenHeader(true);
            }
          }}
        >
          {!isOpenHeader ? (
            <svg
              className="block h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="stroke-[#2662d9] "
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="stroke-[#2662d9]"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </button>
        <div
          className={clsx(
            "fixed sm:inline-flex md:inline-flex lg:hidden xl:hidden  flex flex-col gap-6 items-start   top-16 z-50 dark:bg-[#020817] bg-[#F7FAFC] shadow-lg w-full h-80 rounded-b-2xl p-4 transition-all duration-300",
            {
              "-right-full": !isOpenHeader,
              "right-0": isOpenHeader,
            }
          )}
        >
          <div className="flex flex-col gap-4  *:text-[16px] *:cursor-pointer">
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#home"
              className="text-sm dark:text-white dark:hover:text-[#2662d9] font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#about"
              className="text-sm dark:text-white   dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#projects"
              className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#skills"
              className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#achievements"
              className="text-sm dark:text-white dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              Achievements
            </a>
            <a
              onClick={() => {
                setIsOpenHeader(false);
              }}
              href="#contact"
              className="text-sm dark:text-white  dark:hover:text-[#2662d9]  font-medium text-gray text-primary-hover transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
          <a onClick={() => {
                setIsOpenHeader(false);
              }} href="/myResume/ElmiraShokriyanResume.pdf" download className="bg-primary flex items-start  sm:block md:block lg:hidden xl:hidden  py-2 px-2.5 rounded-lg text-sm font-bold text-white  dark:text-black">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
