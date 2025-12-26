"use client";

import { useTheme } from "@/store/useTheme";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-transparent dark:bg-transparent flex gap-120 justify-center py-6 items-center">
      <div>
        <p className="text-xl text-primary font-bold">ESH.</p>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-8">
          <a
            href="#home"
            className="text-sm dark:text-white dark:hover:text-[#2662d9] font-medium text-gray text-primary-hover transition-colors cursor-pointer"
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
              <circle  cx="12" cy="12" r="4"></circle>
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
        <button className="bg-primary py-2 px-2.5 rounded-lg text-sm font-bold text-white  dark:text-black">
            Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
