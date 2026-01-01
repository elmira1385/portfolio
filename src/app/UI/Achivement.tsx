"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Achivement = () => {
  const achievements = [
    {
      year: "2025",
      icon: "📊",
      title: "Data Dashboard with ApexCharts",
      description:
        "Designed and implemented interactive data visualizations using ApexCharts to display dynamic, real‑time information across multiple components.",
      category: "Project",
    },
    {
      year: "2025",
      icon: "🧩",
      title: "Desktop Menu System",
      description:
        "Built a structured and categorized desktop‑only menu system with clean UI, RTL support, and reusable components.",
      category: "UI/UX",
    },
    {
      year: "2025",
      icon: "🛍️",
      title: "E‑Commerce Display & Categorization",
      description:
        "Developed product listing pages, category filtering, and structured data display for store‑like interfaces using React, Tailwind, and Zustand.",
      category: "Project",
    },
    {
      year: "2025",
      icon: "🌐",
      title: "Multilingual Resume Builder",
      description:
        "Created a bilingual (FA/EN) resume builder with RTL layout, i18next integration, and a fully responsive UI.",
      category: "Project",
    },
    {
      year: "2025",
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Improved page performance by reducing unnecessary re‑renders, applying memoization, and optimizing component structure.",
      category: "Optimization",
    },
    {
      year: "2025",
      icon: "🧩",
      title: "Reusable Component Architecture",
      description:
        "Developed scalable, reusable components using TypeScript and React Hook Form to ensure maintainability and faster development.",
      category: "Code Quality",
    },
    {
      year: "2024",
      icon: "🎨",
      title: "Interactive UI Effects & Animations",
      description:
        "Implemented hover effects, glow interactions, blur animations, and smooth transitions using Framer Motion and TailwindCSS.",
      category: "UI/UX",
    },
    {
      year: "2024",
      icon: "🧠",
      title: "Component‑Driven Architecture",
      description:
        "Built modular, scalable structures using React, Zustand, React Query, Axios, and React Hook Form for efficient data handling.",
      category: "Code Quality",
    },
    {
      year: "2024",
      icon: "🌍",
      title: "Persian & RTL Interface Development",
      description:
        "Designed and implemented fully RTL‑compatible Persian interfaces with proper typography, spacing, and UX adjustments.",
      category: "UI/UX",
    },
    {
      year: "2024",
      icon: "🔗",
      title: "API Integration & Data Management",
      description:
        "Fetched and displayed dynamic data using Axios, React Query caching, and Zustand state management.",
      category: "Backend Integration",
    },
    {
      year: "2024",
      icon: "🚀",
      title: "Project Deployment on Vercel",
      description:
        "Deployed multiple projects on Vercel with optimized settings for speed, SEO, and smooth CI/CD workflow.",
      category: "Deployment",
    },
    {
      year: "2024",
      icon: "🔧",
      title: "Version Control with Git & GitHub",
      description:
        "Used Git workflow for project organization, branching, commits, and documentation across multiple real projects.",
      category: "Collaboration",
    },
    {
      year: "2024",
      icon: "♿",
      title: "Accessibility‑Focused UI",
      description:
        "Applied accessibility principles such as proper alt text, semantic HTML, focus order, and color contrast improvements.",
      category: "Accessibility",
    },
    {
      year: "2024",
      icon: "🗂️",
      title: "Familiarity with Jira & Scrum Methodology",
      description:
        "Gained hands‑on experience working with Scrum boards, tasks, user stories, and workflow management in Jira to understand agile development processes.",
      category: "Workflow",
    },
  ];
  return (
    <div className="flex flex-col gap-8 sm:px-46 px-6 pb-6">
      <div className="flex flex-col gap-6 ">
        <p className="text-3xl sm:text-4xl font-bold text-gray dark:text-white">
          <span className="border-b-4 border-[#2662d9]">Achi</span>evements
        </p>
        <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base sm:w-190">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
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
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          slidesPerView={3.2}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index} className="w-100 p-6 m-2 bg-white hover:scale-103 dark:bg-[#020817] shadow-2xs rounded-lg  shadow-gray-300 dark:shadow-none dark:border-2 border-gray-900 ">
            
                <div className="flex gap-2 items-center">
                  <p className="text-xl border-none">{item.icon}</p>
                  <div className="flex flex-col ">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
                    <h3 className="text-[16px] font-semibold text-gray dark:text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="dark:text-gray-400 text-gray-500 text-[15px] sm:text-base mt-2">{item.description}</p>
                <span className="inline-block mt-4 px-3 py-1 text-sm bg-white/10 rounded-full">
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
