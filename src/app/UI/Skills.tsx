import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col  gap-12 sm:px-46 px-6 pb-40 pt-30"
    >
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Sk</span>ills
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          Focused on building modern, scalable, and user‑friendly web applications.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-6">
        <div className="flex flex-col  gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
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
              Frontend Frameworks
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              React
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Next.js
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              React Router
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              React Query
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Zustand
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Redux
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              React Hook Form
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
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Styling & UI
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap ">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              TailwindCSS
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Responsive Design & Mobile-first
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              RTL
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Component-Based Architecture
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              UI/UX Principles
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              UI/UX Principles
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Accessibility Basics
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                fill="#2662d9"
                width="24px"
                height="24px"
                viewBox="-2 -2.5 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M10 13.554l3.517 1.85-.672-3.917 2.846-2.774-3.932-.571L10 4.579 8.241 8.142l-3.932.571 2.846 2.774-.672 3.916L10 13.554zm0 2.26L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254 6.902 1.003-4.995 4.868 1.18 6.875L10 15.814z" />
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Interactivity & Visuals
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Framer Motion
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Swiper
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              ApexCharts
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                width="23px"
                height="23px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 7.5L7.74264 13.2574C6.94699 14.053 5.86786 14.5 4.74264 14.5C2.3995 14.5 0.5 12.6005 0.5 10.2574C0.5 9.13214 0.946991 8.05301 1.74264 7.25736L7.67157 1.32843C8.20201 0.797993 8.92143 0.5 9.67157 0.5C11.2337 0.5 12.5 1.76633 12.5 3.32843C12.5 4.07857 12.202 4.79799 11.6716 5.32843L5.91421 11.0858C5.649 11.351 5.28929 11.5 4.91421 11.5C4.13316 11.5 3.5 10.8668 3.5 10.0858C3.5 9.71071 3.649 9.351 3.91421 9.08579L9.5 3.5"
                  stroke="#2662d9"
                />
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Dta & API Management
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Axios
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Data Fetching & Caching Strategies
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              State Management(Zustand,React Query)
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
              Tools & Platforms
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Git & GitHub
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Vercel
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              ESlint/Prettier
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Chrome DevTools
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              VS Code
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Figma
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#2662d9"
                  stroke="#2662d9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.75 6H20a1 1 0 0 1 1 1v3.25a.75.75 0 0 1-.75.75H20a2 2 0 1 0 0 4h.25a.75.75 0 0 1 .75.75V20a1 1 0 0 1-1 1h-3.25a.75.75 0 0 1-.75-.75V20a2 2 0 1 0-4 0v.25a.75.75 0 0 1-.75.75H7a1 1 0 0 1-1-1v-4.25a.75.75 0 0 0-.75-.75H5a2 2 0 1 1 0-4h.25a.75.75 0 0 0 .75-.75V7a1 1 0 0 1 1-1h4.25a.75.75 0 0 0 .75-.75V5a2 2 0 1 1 4 0v.25c0 .414.336.75.75.75z"
                />
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Utility Libraries
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              i18next
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              UUID
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              clsx
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-2  text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                fill="#2662d9"
                width="24px"
                height="24px"
                viewBox="0 0 128 128"
                id="Layer_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M32.2,9L1,64l31.2,55h63.5L127,64L95.8,9H32.2z M91.1,111H36.9L10.2,64l26.7-47h54.2l26.7,47L91.1,111z" />

                  <path d="M64,35c-16,0-29,13-29,29c0,16,13,29,29,29s29-13,29-29C93,48,80,35,64,35z M64,85c-11.6,0-21-9.4-21-21s9.4-21,21-21   s21,9.4,21,21S75.6,85,64,85z" />
                </g>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Development Practices
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Performance Optimization
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Clean Architecture
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Reusable Components
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Project Structuring
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Debugging
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900">
          <div className="flex gap-3 items-center">
            <div className="p-1 text-primary rounded-lg bg-[#eaf1fc] dark:bg-[#152B4F]  ">
              <svg
                width="34px"
                height="34px"
                viewBox="0 0 72 72"
                id="emoji"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="color">
                  <circle cx="21" cy="17" r="3" fill="#2662d9" stroke="none" />
                  <circle
                    cx="55.9917"
                    cy="26.3237"
                    r="3"
                    fill="#2662d9"
                    stroke="none"
                  />
                  <circle
                    cx="29.9928"
                    cy="47.0078"
                    r="3"
                    fill="#2662d9"
                    stroke="none"
                  />
                  <polygon
                    fill="#2662d9"
                    stroke="none"
                    points="15.4366,27.1041 18.5181,24.3901 23.3523,24.1922 26.3208,27.0193 27.0051,30.9992 14.924,30.9914"
                  />
                  <polygon
                    fill="#2662d9"
                    stroke="none"
                    points="50.4911,36.4303 53.5726,33.7163 58.4069,33.5184 61.3753,36.3454 62.0596,40.3254 49.9785,40.3176"
                  />
                  <polygon
                    fill="#2662d9"
                    stroke="none"
                    points="24.4847,57.1118 27.5662,54.3979 32.4005,54.2 35.3689,57.027 36.0532,61.007 23.9721,60.9992"
                  />
                </g>
                <g id="hair" />
                <g id="skin" />
                <g id="skin-shadow" />
                <g id="line">
                  <circle
                    cx="21"
                    cy="17"
                    r="3"
                    fill="none"
                    stroke="#2662d9"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M15,30c0,0,1-4.3112,3-5.3112s4-1,6,0S27,30,27,30"
                  />
                  <circle
                    cx="55.9917"
                    cy="26.3237"
                    r="3"
                    fill="none"
                    stroke="#2662d9"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M49.9917,39.3237c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
                  />
                  <circle
                    cx="29.9928"
                    cy="47.0078"
                    r="3"
                    fill="none"
                    stroke="#2662d9"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M23.9928,60.0078c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M52.552,20.1356C48.333,15.1588,42.0354,12,35,12c-2.7693,0-5.4243,0.4894-7.8832,1.3865"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M39.4332,57.5731c8.2126-1.6036,14.8614-7.5774,17.4267-15.4016"
                  />
                  <path
                    fill="none"
                    stroke="#2662d9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M12.0868,32.9884C12.0293,33.6513,12,34.3222,12,35c0,7.9743,4.0582,15.0008,10.2221,19.1268"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-[16px] sm:text-lg font-semibold text-gray dark:text-white">
              Workflow & Collaboration
            </h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31] px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Agile & Scrim
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px] ">
              Jira
            </p>
            <p className="dark:text-white dark:bg-transparent dark:hover:bg-[#0C1A31] dark:hover:border-[#0C1A31]  px-2.5 py-1 text-gray hover:bg-[#eaf1fc] hover:scale-105 bg-[#F7FAFC] border border-[#d8edfc] dark:border-2 dark:border-gray-900 rounded-full text-sm sm:text-[13px]">
              Version Control Workflow (Branches,commits,..)
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
