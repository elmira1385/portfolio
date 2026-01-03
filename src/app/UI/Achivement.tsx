"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Achivement = () => {
  
  const achievements = [
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6ZM7,12a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V13A1,1,0,0,0,7,12Zm10-2a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,17,10Zm2-8H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
      title: "Data Dashboard with ApexCharts",
      description:
        "Designed and implemented interactive data visualizations using ApexCharts to display dynamic, real‑time information across multiple components.",
      category: "Project",
    },
    {
      year: "2025",
      icon: (
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
      ),
      title: "Desktop Menu System",
      description:
        "Built a structured and categorized desktop‑only menu system with clean UI, RTL support, and reusable components.",
      category: "UI/UX",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22,5H2A1,1,0,0,0,1,6v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V12.82A3,3,0,0,0,23,10V6A1,1,0,0,0,22,5ZM15,7h2v3a1,1,0,0,1-2,0ZM11,7h2v3a1,1,0,0,1-2,0ZM7,7H9v3a1,1,0,0,1-2,0ZM4,11a1,1,0,0,1-1-1V7H5v3A1,1,0,0,1,4,11ZM14,21H10V19a2,2,0,0,1,4,0Zm5,0H16V19a4,4,0,0,0-8,0v2H5V12.82a3.17,3.17,0,0,0,1-.6,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3,3,0,0,0,4,0,3.17,3.17,0,0,0,1,.6Zm2-11a1,1,0,0,1-2,0V7h2ZM4.3,3H20a1,1,0,0,0,0-2H4.3a1,1,0,0,0,0,2Z" />
        </svg>
      ),
      title: "E‑Commerce Display & Categorization",
      description:
        "Developed product listing pages, category filtering, and structured data display for store‑like interfaces using Next.Js, Tailwind, and Zustand.",
      category: "Project",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.51211712,15 L8.17190229,15 C8.05949197,14.0523506 8,13.0444554 8,12 C8,10.9555446 8.05949197,9.94764942 8.17190229,9 L3.51211712,9 C3.18046266,9.93833678 3,10.9480937 3,12 C3,13.0519063 3.18046266,14.0616632 3.51211712,15 L3.51211712,15 Z M3.93551965,16 C5.12590433,18.3953444 7.35207678,20.1851177 10.0280093,20.783292 C9.24889451,19.7227751 8.65216136,18.0371362 8.31375067,16 L3.93551965,16 L3.93551965,16 Z M20.4878829,15 C20.8195373,14.0616632 21,13.0519063 21,12 C21,10.9480937 20.8195373,9.93833678 20.4878829,9 L15.8280977,9 C15.940508,9.94764942 16,10.9555446 16,12 C16,13.0444554 15.940508,14.0523506 15.8280977,15 L20.4878829,15 L20.4878829,15 Z M20.0644804,16 L15.6862493,16 C15.3478386,18.0371362 14.7511055,19.7227751 13.9719907,20.783292 C16.6479232,20.1851177 18.8740957,18.3953444 20.0644804,16 L20.0644804,16 Z M9.18440269,15 L14.8155973,15 C14.9340177,14.0623882 15,13.0528256 15,12 C15,10.9471744 14.9340177,9.93761183 14.8155973,9 L9.18440269,9 C9.06598229,9.93761183 9,10.9471744 9,12 C9,13.0528256 9.06598229,14.0623882 9.18440269,15 L9.18440269,15 Z M9.3349823,16 C9.85717082,18.9678295 10.9180729,21 12,21 C13.0819271,21 14.1428292,18.9678295 14.6650177,16 L9.3349823,16 L9.3349823,16 Z M3.93551965,8 L8.31375067,8 C8.65216136,5.96286383 9.24889451,4.27722486 10.0280093,3.21670804 C7.35207678,3.81488234 5.12590433,5.60465556 3.93551965,8 L3.93551965,8 Z M20.0644804,8 C18.8740957,5.60465556 16.6479232,3.81488234 13.9719907,3.21670804 C14.7511055,4.27722486 15.3478386,5.96286383 15.6862493,8 L20.0644804,8 L20.0644804,8 Z M9.3349823,8 L14.6650177,8 C14.1428292,5.03217048 13.0819271,3 12,3 C10.9180729,3 9.85717082,5.03217048 9.3349823,8 L9.3349823,8 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z" />
        </svg>
      ),
      title: "Multilingual Resume Builder",
      description:
        "Created a bilingual (FA/EN) resume builder with RTL layout, i18next integration, and a fully responsive UI.",
      category: "Project",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="22px"
          height="22px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" />
        </svg>
      ),
      title: "Performance Optimization",
      description:
        "Improved page performance by reducing unnecessary re‑renders, applying memoization, and optimizing component structure.",
      category: "Optimization",
    },
    {
      year: "2025",
      icon: (
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
      ),
      title: "Reusable Component Architecture",
      description:
        "Developed scalable, reusable components using TypeScript and React Hook Form to ensure maintainability and faster development.",
      category: "Code Quality",
    },
    {
      year: "2025",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
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
      ),
      title: "Interactive UI Effects & Animations",
      description:
        "Implemented hover effects, glow interactions, blur animations, and smooth transitions using Framer Motion and TailwindCSS.",
      category: "UI/UX",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="M22,11A4,4,0,0,0,20,7.52,3,3,0,0,0,20,7a3,3,0,0,0-3-3l-.18,0A3,3,0,0,0,12,2.78,3,3,0,0,0,7.18,4L7,4A3,3,0,0,0,4,7a3,3,0,0,0,0,.52,4,4,0,0,0-.55,6.59A4,4,0,0,0,7,20l.18,0A3,3,0,0,0,12,21.22,3,3,0,0,0,16.82,20L17,20a4,4,0,0,0,3.5-5.89A4,4,0,0,0,22,11ZM11,8.55a4.72,4.72,0,0,0-.68-.32,1,1,0,0,0-.64,1.9A2,2,0,0,1,11,12v1.55a4.72,4.72,0,0,0-.68-.32,1,1,0,0,0-.64,1.9A2,2,0,0,1,11,17v2a1,1,0,0,1-1,1,1,1,0,0,1-.91-.6,4.07,4.07,0,0,0,.48-.33,1,1,0,1,0-1.28-1.54A2,2,0,0,1,7,18a2,2,0,0,1-2-2,2,2,0,0,1,.32-1.06A3.82,3.82,0,0,0,6,15a1,1,0,0,0,0-2,1.84,1.84,0,0,1-.69-.13A2,2,0,0,1,5,9.25a3.1,3.1,0,0,0,.46.35,1,1,0,1,0,1-1.74.9.9,0,0,1-.34-.33A.92.92,0,0,1,6,7,1,1,0,0,1,7,6a.76.76,0,0,1,.21,0,3.85,3.85,0,0,0,.19.47,1,1,0,0,0,1.37.37A1,1,0,0,0,9.13,5.5,1.06,1.06,0,0,1,9,5a1,1,0,0,1,2,0Zm7.69,4.32A1.84,1.84,0,0,1,18,13a1,1,0,0,0,0,2,3.82,3.82,0,0,0,.68-.06A2,2,0,0,1,19,16a2,2,0,0,1-2,2,2,2,0,0,1-1.29-.47,1,1,0,0,0-1.28,1.54,4.07,4.07,0,0,0,.48.33A1,1,0,0,1,14,20a1,1,0,0,1-1-1V17a2,2,0,0,1,1.32-1.87,1,1,0,0,0-.64-1.9,4.72,4.72,0,0,0-.68.32V12a2,2,0,0,1,1.32-1.87,1,1,0,0,0-.64-1.9,4.72,4.72,0,0,0-.68.32V5a1,1,0,0,1,2,0,1.06,1.06,0,0,1-.13.5,1,1,0,0,0,.36,1.37A1,1,0,0,0,16.6,6.5,3.85,3.85,0,0,0,16.79,6,.76.76,0,0,1,17,6a1,1,0,0,1,1,1,1,1,0,0,1-.17.55.9.9,0,0,1-.33.31,1,1,0,0,0,1,1.74A2.66,2.66,0,0,0,19,9.25a2,2,0,0,1-.27,3.62Z" />
        </svg>
      ),
      title: "Component‑Driven Architecture",
      description:
        "Built modular, scalable structures using React, Zustand, React Query, Axios, and React Hook Form for efficient data handling.",
      category: "Code Quality",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11,20.9450712 L11,19.7071068 L9.14644661,17.8535534 C9.05267842,17.7597852 9,17.6326082 9,17.5 L9,14.7071068 L8.14644661,13.8535534 C8.05267842,13.7597852 8,13.6326082 8,13.5 L8,12.5 C8,12.2238576 8.22385763,12 8.5,12 L13.5,12 C14.3284271,12 15,12.6715729 15,13.5 L15,14.5 C15,14.7761424 15.2238576,15 15.5,15 C16.3284271,15 17,15.6715729 17,16.5 C17,16.7761424 17.2238576,17 17.5,17 L19.484451,17 C20.4417283,15.569902 21,13.8501466 21,12 C21,8.08134352 18.4955771,4.74762635 15,3.51211712 L15,4.5 C15,5.88071187 13.8807119,7 12.5,7 L11.5,7 C11.2238576,7 11,7.22385763 11,7.5 L11,8.5 C11,9.32842712 10.3284271,10 9.5,10 L8,10 L8,10.5 C8,10.6326082 7.94732158,10.7597852 7.85355339,10.8535534 L6.85355339,11.8535534 C6.65829124,12.0488155 6.34170876,12.0488155 6.14644661,11.8535534 L3.4561745,9.16328128 C3.16022042,10.0551082 3,11.0088434 3,12 C3,16.6325537 6.50004954,20.4476269 11,20.9450712 Z M12,21 C14.6654994,21 17.0603579,19.8412481 18.7083195,18 L17.5,18 C16.6715729,18 16,17.3284271 16,16.5 C16,16.2238576 15.7761424,16 15.5,16 C14.6715729,16 14,15.3284271 14,14.5 L14,13.5 C14,13.2238576 13.7761424,13 13.5,13 L9,13 L9,13.2928932 L9.85355339,14.1464466 C9.94732158,14.2402148 10,14.3673918 10,14.5 L10,17.2928932 L11.8535534,19.1464466 C11.9473216,19.2402148 12,19.3673918 12,19.5 L12,21 Z M11.5907801,21.9917793 C11.5613408,21.9971789 11.5309998,22 11.5,22 C11.4509482,22 11.4035462,21.9929366 11.3587556,21.9797714 C6.13471991,21.6491659 2,17.3074408 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C11.8629318,22 11.7265076,21.9972423 11.5907801,21.9917793 L11.5907801,21.9917793 Z M3.86090753,8.15380075 L6.5,10.7928932 L7,10.2928932 L7,9.5 C7,9.22385763 7.22385763,9 7.5,9 L9.5,9 C9.77614237,9 10,8.77614237 10,8.5 L10,7.5 C10,6.67157288 10.6715729,6 11.5,6 L12.5,6 C13.3284271,6 14,5.32842712 14,4.5 L14,3.22301642 C13.3567773,3.07706144 12.687388,3 12,3 C8.40547102,3 5.303118,5.10725578 3.86090753,8.15380075 L3.86090753,8.15380075 Z" />
        </svg>
      ),
      title: "Persian & RTL Interface Development",
      description:
        "Designed and implemented fully RTL‑compatible Persian interfaces with proper typography, spacing, and UX adjustments.",
      category: "UI/UX",
    },
    {
      year: "2025",
      icon: (
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 7.5L7.74264 13.2574C6.94699 14.053 5.86786 14.5 4.74264 14.5C2.3995 14.5 0.5 12.6005 0.5 10.2574C0.5 9.13214 0.946991 8.05301 1.74264 7.25736L7.67157 1.32843C8.20201 0.797993 8.92143 0.5 9.67157 0.5C11.2337 0.5 12.5 1.76633 12.5 3.32843C12.5 4.07857 12.202 4.79799 11.6716 5.32843L5.91421 11.0858C5.649 11.351 5.28929 11.5 4.91421 11.5C4.13316 11.5 3.5 10.8668 3.5 10.0858C3.5 9.71071 3.649 9.351 3.91421 9.08579L9.5 3.5"
            stroke="#2662d9"
          />
        </svg>
      ),
      title: "API Integration & Data Management",
      description:
        "Fetched and displayed dynamic data using Axios, React Query caching, and Zustand state management.",
      category: "Backend Integration",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="M22.60107,2.062a1.00088,1.00088,0,0,0-.71289-.71289A11.25224,11.25224,0,0,0,10.46924,4.97217L9.35431,6.296l-2.6048-.62848A2.77733,2.77733,0,0,0,3.36279,7.0249L1.1626,10.9248A.99989.99989,0,0,0,1.82422,12.394l3.07275.65869a13.41952,13.41952,0,0,0-.55517,2.43409,1.00031,1.00031,0,0,0,.28466.83642l3.1001,3.1001a.99941.99941,0,0,0,.707.293c.02881,0,.05762-.00147.08692-.00391a12.16892,12.16892,0,0,0,2.49157-.49l.64368,3.00318a1.0003,1.0003,0,0,0,1.46924.66162l3.90527-2.20264a3.03526,3.03526,0,0,0,1.375-3.30371l-.6687-2.759,1.23706-1.13751A11.20387,11.20387,0,0,0,22.60107,2.062ZM3.57227,10.72314,5.12842,7.96338a.82552.82552,0,0,1,1.06982-.37549l1.71741.4162-.65.77179A13.09523,13.09523,0,0,0,5.67633,11.174Zm12.47021,8.22217L13.32666,20.477l-.4295-2.00464a11.33992,11.33992,0,0,0,2.41339-1.61987l.74353-.68366.40344,1.66462A1.041,1.041,0,0,1,16.04248,18.94531ZM17.65674,11.98l-3.68457,3.38623a9.77348,9.77348,0,0,1-5.17041,2.3042l-2.4043-2.4043a10.932,10.932,0,0,1,2.40088-5.206l1.67834-1.99268a.9635.9635,0,0,0,.07813-.09277L11.98975,6.271a9.27757,9.27757,0,0,1,8.80957-3.12012A9.21808,9.21808,0,0,1,17.65674,11.98Zm-.923-6.16376a1.5,1.5,0,1,0,1.5,1.5A1.49992,1.49992,0,0,0,16.7337,5.81622Z" />
        </svg>
      ),
      title: "Project Deployment on Vercel",
      description:
        "Deployed multiple projects on Vercel with optimized settings for speed, SEO, and smooth CI/CD workflow.",
      category: "Deployment",
    },
    {
      year: "2025",
      icon: (
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.43943 0.853525C7.02522 0.267739 7.97497 0.267737 8.56075 0.853524L14.1465 6.43931C14.7323 7.0251 14.7323 7.97484 14.1465 8.56063L8.56075 14.1464C7.97497 14.7322 7.02522 14.7322 6.43943 14.1464L0.853647 8.56063C0.267861 7.97485 0.267859 7.0251 0.853646 6.43931L4.79293 2.50003L6.14619 3.85329C6.05248 4.04911 6 4.26843 6 4.5C6 5.15311 6.4174 5.70873 7 5.91465V9.08535C6.4174 9.29127 6 9.84689 6 10.5C6 11.3284 6.67157 12 7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.84689 8.5826 9.29127 8 9.08535V5.91465C8.05018 5.89691 8.09914 5.87658 8.14671 5.85381L9.14618 6.85329C9.05248 7.04911 9 7.26843 9 7.5C9 8.32843 9.67157 9 10.5 9C11.3284 9 12 8.32843 12 7.5C12 6.67157 11.3284 6 10.5 6C10.2684 6 10.0491 6.05248 9.85329 6.14619L8.85382 5.14671C8.94752 4.95089 9 4.73157 9 4.5C9 3.67157 8.32843 3 7.5 3C7.26843 3 7.04911 3.05248 6.85329 3.14619L5.50003 1.79293L6.43943 0.853525Z"
            fill="#2662d9"
          />
        </svg>
      ),
      title: "Version Control with Git & GitHub",
      description:
        "Used Git workflow for project organization, branching, commits, and documentation across multiple real projects.",
      category: "Collaboration",
    },
    {
      year: "2024",
      icon: (
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2662d9"
            d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"
          ></path>
          <path
            fill="#2662d9"
            d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"
          ></path>
        </svg>
      ),
      title: "Accessibility‑Focused UI",
      description:
        "Applied accessibility principles such as proper alt text, semantic HTML, focus order, and color contrast improvements.",
      category: "Accessibility",
    },
    {
      year: "2025",
      icon: (
        <svg
          fill="#2662d9"
          width="23px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z" />
        </svg>
      ),
      title: "Familiarity with Jira & Scrum Methodology",
      description:
        "Gained hands‑on experience working with Scrum boards, tasks, user stories, and workflow management in Jira to understand agile development processes.",
      category: "Workflow",
    },
  ];
  return (
    <div id="achievements" className="flex flex-col scroll-mt-30  gap-8 sm:px-46 px-6 pb-6">
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Achi</span>evements
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          These achievements highlight the real projects I’ve built and the results I delivered
        </p>
      </div>
      <div className=" w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center mb-8">
            <svg
              className="stroke-gray-500 dark:stroke-gray-400"
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
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="19" cy="5" r="1"></circle>
              <circle cx="5" cy="5" r="1"></circle>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="19" cy="19" r="1"></circle>
              <circle cx="5" cy="19" r="1"></circle>
            </svg>
            <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base">
              explore
            </p>
          </div>
          <div className="flex justify-end  gap-2 items-center mb-8">
            <button className="custom-prev rounded-full bg-primary-hover group border border-gray-300 dark:border-2 dark:border-gray-900 flex items-center w-10 h-10  justify-center transition">
              <svg
                className="stroke-[#344256] dark:group-hover:stroke-[#344256] group-hover:stroke-white dark:stroke-white fill-transparent"
                fill="#000000"
                width="18px"
                height="18px"
                viewBox="0 0 14 24"
                id="triple-left-sign"
                strokeWidth="3"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline id="primary" points="10 19 3 12 10 5"></polyline>
              </svg>
            </button>

            <button className="custom-next rounded-full bg-primary-hover border border-gray-300 group dark:border-2 dark:border-gray-900 flex items-center w-10 h-10  justify-center transition">
              <svg
                className="stroke-[#344256] dark:group-hover:stroke-[#344256] dark:stroke-white group-hover:stroke-white fill-transparent"
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 34 24"
                id="triple-right-sign"
                strokeWidth="3"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline id="primary" points="14 5 21 12 14 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          className="overflow-hidden w-full"
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={16}
          slidesPerView="auto"
          grabCursor={false}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {achievements.map((item, index) => (
            <SwiperSlide 
              key={index}
              className="max-w-75 sm:max-w-85 shrink-0 p-6 m-2 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900 "
            >
              <div className="flex gap-2 items-center">
                <div className="p-2  text-primary flex justify-center items-center rounded-full bg-[#eaf1fc] dark:bg-[#152B4F]  ">
                  {item.icon}
                </div>
                <div className="flex flex-col ">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.year}
                  </p>
                  <h3 className="text-[16px] font-semibold text-gray dark:text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base mt-2">
                {item.description}
              </p>
              <span className="inline-block text-[#2662d9] mt-4 px-3 py-1 text-sm bg-[#eaf1fc] dark:bg-[#152B4F] rounded-full">
                {item.category}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Achivement;
