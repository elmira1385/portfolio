"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CursorAnimation from "./CursorAnimation";
import axios from "@/api/axios";
const About = () => {
  const[aboutMe,setAboutMe]=useState("")
  useEffect(()=>{
    const getAboutMe=async()=>{
      const{data}=await axios.get<string>("AllApi/aboutMe")
      setAboutMe(data)
    }
    getAboutMe()
  },[])
  const box1=useRef(null)
  const box2=useRef(null)
  return (
    <div
      id="about"
      className="flex scroll-mt-20 flex-col py-10 sm:flex-row  sm:px-46  sm:pb-30 sm:pt-10 gap-10 sm:gap-0  sm:justify-between"
    >
      <div className="flex flex-col p-6 sm:p-0 gap-10 sm:gap-12">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
              <span className="border-b-4 border-[#2662d9]">Abo</span>ut Me
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg
                className="stroke-[#2662d9]"
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
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <p className="font-bold text-lg text-gray dark:text-white">Bio</p>
            </div>
            <div>
              <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base ">
                {aboutMe}
              </p>
            </div>
          </div>
        </div>
        <div  className="flex flex-col sm:flex-row gap-6 ">
          <div ref={box1} className="relative overflow-hidden sm:justify-center p-7  bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg flex flex-col gap-4 shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray dark:text-white">
                <svg
                  className="stroke-[#2662d9]"
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
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
                Education
              </h3>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-medium text-gray dark:text-white">
                BSc in Software Engineering  
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                Islamic Azad University  
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                Currently pursuing a degree focused on software 
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                development and modern web technologies.
              </p>
            </div>
            <CursorAnimation boxRef={box1}/>
          </div>
          <div ref={box2} className=" relative overflow-hidden sm:justify-center p-7  bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg flex flex-col gap-4 shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-gray dark:text-white">
                <svg
                  className="stroke-[#2662d9]"
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
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                Experience
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-gray dark:text-white">
                BSc in Software Engineering
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                SLIIT (Sri Lanka Institute of Information Technology)
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                2022 - Present
              </p>
              <p className="text-[12px] sm:text-sm dark:text-gray-400 text-gray-500">
                Dean's List (2023)
              </p>
            </div>
            <CursorAnimation boxRef={box2}/>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 sm:px-0 pb-30 sm:py-18 gap-6">
        <div className=" relative hover:scale-103">
          <Image
            className="rounded-full outline-3 outline-[#E1EAF8] dark:outline-gray-700"
            width={180}
            height={180}
            src="/image/myPicture.jpg"
            alt="myPicture"
          />
          <div className="absolute -bottom-1 -right-2 bg-primary dark:text-black text-white px-3 py-1 rounded-full text-sm font-medium">
            3.41 GPA
          </div>
        </div>
        <div>
          <p className="text-[22px] text-gray font-bold dark:text-white text-center sm:text-start">
            Elmira ShokriyanFard
          </p>
          <p className="text-sm dark:text-gray-400 text-gray-500 text-center sm:text-start">
            Software Engineering Student
          </p>
        </div>
        <div className="flex  px-4 gap-4">
          <div className="flex justify-center items-center rounded-full  px-2.5 py-0.5 text-xs font-semibold  dark:text-white dark:border border-gray-700 bg-[#E1EAF8] dark:bg-[#07142D]">
            React
          </div>
          <div className="flex justify-center items-center rounded-full  px-2.5 py-0.5 text-xs font-semibold  dark:text-white dark:border border-gray-700 bg-[#E1EAF8] dark:bg-[#07142D]">
            JavaScript
          </div>
          <div className=" rounded-full flex justify-center items-center px-2.5 py-1 text-xs font-semibold  dark:text-white dark:border border-gray-700 bg-[#E1EAF8] dark:bg-[#07142D]">
            Next.js
          </div>
        </div>
        <div>
          <button className="bg-primary hover:scale-103 shadow-lg/45 shadow-blue-700 hover:shadow-lg/65 flex gap-2 justify-center items-center py-2 px-3 rounded-lg">
            <svg
              className="stroke-white dark:stroke-black fill-none"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              id="download-double-arrow"
              data-name="Line Color"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                className="stroke-white dark:stroke-black fill-none"
                id="secondary"
                points="15 14 12 17 9 14"
              ></polyline>
              <polyline
                className="stroke-white  dark:stroke-black fill-none"
                id="secondary-2"
                data-name="secondary"
                points="15 9 12 12 9 9"
              ></polyline>
              <line
                className="stroke-white  dark:stroke-black fill-none"
                id="secondary-3"
                data-name="secondary"
                x1="12"
                y1="12"
                x2="12"
                y2="3"
              ></line>
              <path
                className="stroke-white  dark:stroke-black fill-none"
                id="primary"
                d="M19,10h1a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H5"
              ></path>
            </svg>
            <p className="text-white font-medium text-sm dark:text-black">
              Download Resume
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
