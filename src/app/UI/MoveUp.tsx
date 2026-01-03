"use client";
import { useEffect, useState } from "react";

const MoveUp = () => {
  const [isShowFlashMoveUP, setIsShowFlashMoveUP] = useState(false);
  useEffect(() => {
    const Flash = () => {
      if (window.scrollY >= 500) {
        setIsShowFlashMoveUP(true);
      } else {
        setIsShowFlashMoveUP(false);
      }
    };
    window.addEventListener("scroll" ,Flash);
    
  }, []);
  return (
    isShowFlashMoveUP && (
      <div onClick={()=>{
        window.scrollTo({top:0,behavior:"smooth"})
      }} 
        className="fixed bottom-6 shadow-lg/30 shadow-blue-700  right-6 h-12 w-12 rounded-full transition-all duration-300 bg-primary  cursor-pointer flex items-center justify-center "
        aria-label="Scroll to top"
        role="button"
      >
        <svg
          className="stroke-white dark:stroke-[#020817]"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </div>
    )
  );
};

export default MoveUp;
