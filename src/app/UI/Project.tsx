"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import example from "@/image/example.png";
import { button, div } from "framer-motion/client";
import CursorAnimation from "./CursorAnimation";
const Project = () => {
  const [ShowIconGithub, setShowIconGithub] = useState<number | null>(null);
  const [isShowMore, setIsShowMore] = useState(false);
  const box3=useRef(null)
  const box4=useRef(null)
  const box5=useRef(null)
  const box6=useRef(null)
  return (
    <div
      id="projects"
      className="flex flex-col scroll-mt-30 gap-10 sm:px-46 px-6 pb-6 pt-4"
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Pro</span>jects
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-6 items-center sm:flex-wrap gap-6">
        <div className="flex flex-col justify-center items-center sm:w-92  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900">
          <div
            className="relative"
            onMouseMove={() => {
              setShowIconGithub(1);
            }}
            onMouseLeave={() => {
              setShowIconGithub(null);
            }}
          >
            <Image className="rounded-t-xl" alt="example" src={example} />
            {ShowIconGithub === 1 && (
              <div className=" w-[351.2px] flex justify-center items-center h-44.5 rounded-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                <div className="bg-white rounded-full p-2 z-20">
                  <svg
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
                </div>
              </div>
            )}
          </div>
          <div ref={box3} className="flex relative overflow-hidden flex-col  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
            <h3 className="text-xl font-bold text-gray dark:text-white ">
              MSR Tailor Store
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              A application with next.js for order placement and checkout
              functionality for a tailor store.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Html
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Tailwind
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                React
              </span>
            </div>
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <p className="text-sm font-medium ">Github</p>
            </button>
            <CursorAnimation boxRef={box3}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-92  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900">
          <div
            className="relative"
            onMouseMove={() => {
              setShowIconGithub(2);
            }}
            onMouseLeave={() => {
              setShowIconGithub(null);
            }}
          >
            <Image className="rounded-t-xl" alt="example" src={example} />
            {ShowIconGithub === 2 && (
              <div className=" w-[351.2px] flex justify-center items-center h-44.5 rounded-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                <div className="bg-white rounded-full p-2 z-20">
                  <svg
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
                </div>
              </div>
            )}
          </div>
          <div ref={box4} className="flex relative overflow-hidden flex-col  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
            <h3 className="text-xl font-bold text-gray dark:text-white ">
              MSR Tailor Store
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              A application with next.js for order placement and checkout
              functionality for a tailor store.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Html
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Tailwind
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                React
              </span>
            </div>
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <p className="text-sm font-medium ">Github</p>
            </button>
            <CursorAnimation boxRef={box4}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:w-92  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900">
          <div
            className="relative"
            onMouseMove={() => {
              setShowIconGithub(3);
            }}
            onMouseLeave={() => {
              setShowIconGithub(null);
            }}
          >
            <Image className="rounded-t-xl" alt="example" src={example} />
            {ShowIconGithub === 3 && (
              <div className=" w-[351.2px] flex justify-center items-center h-44.5 rounded-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                <div className="bg-white rounded-full p-2 z-20">
                  <svg
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
                </div>
              </div>
            )}
          </div>
          <div ref={box5} className="flex relative overflow-hidden flex-col  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
            <h3 className="text-xl font-bold text-gray dark:text-white ">
              MSR Tailor Store
            </h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              A application with next.js for order placement and checkout
              functionality for a tailor store.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Html
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                Tailwind
              </span>
              <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                React
              </span>
            </div>
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <p className="text-sm font-medium ">Github</p>
            </button>
            <CursorAnimation boxRef={box5}/>
          </div>
        </div>
        {isShowMore && (
          <div className="flex flex-col justify-center items-center sm:w-92  hover:scale-102 hover:shadow-2xl shadow-gray-300 transition-all rounded-xl  dark:hover:shadow-none dark:border-2 dark:border-gray-900">
            <div
              className="relative"
              onMouseMove={() => {
                setShowIconGithub(4);
              }}
              onMouseLeave={() => {
                setShowIconGithub(null);
              }}
            >
              <Image className="rounded-t-xl" alt="example" src={example} />
              {ShowIconGithub === 4 && (
                <div className=" w-[351.2px] flex justify-center items-center h-44.5 rounded-xl bg-[#2662d9]/25 absolute top-[50%] left-[50%] -translate-1/2  ">
                  <div className="bg-white rounded-full p-2 z-20">
                    <svg
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
                  </div>
                </div>
              )}
            </div>
            <div ref={box6} className="flex flex-col relative overflow-hidden  p-6 gap-4 self-start dark:bg-[#020817]  bg-white rounded-b-xl">
              <h3 className="text-xl font-bold text-gray dark:text-white ">
                MSR Tailor Store
              </h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm">
                A application with next.js for order placement and checkout
                functionality for a tailor store.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                  Html
                </span>
                <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                  Tailwind
                </span>
                <span className="text-xs bg-[#eaf1fc] dark:bg-[#152B4F] text-primary rounded-full px-3 py-1">
                  React
                </span>
              </div>
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <p className="text-sm font-medium ">Github</p>
              </button>
              <CursorAnimation boxRef={box6}/>
            </div>
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
