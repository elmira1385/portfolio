import { v4 as uuidv4 } from "uuid";
export const GET = async () => {
  return Response.json([
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement1.svg",
      title: "Data Dashboard with ApexCharts",
      description:
        "Designed and implemented interactive data visualizations using ApexCharts to display dynamic, real‑time information across multiple components.",
      category: "Project",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement2.svg",
      title: "Desktop Menu System",
      description:
        "Built a structured and categorized desktop‑only menu system with clean UI, RTL support, and reusable components.",
      category: "UI/UX",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement3.svg",
      title: "E‑Commerce Display & Categorization",
      description:
        "Developed product listing pages, category filtering, and structured data display for store‑like interfaces using Next.Js, Tailwind, and Zustand.",
      category: "Project",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement4.svg",
      title: "Multilingual Resume Builder",
      description:
        "Created a bilingual (FA/EN) resume builder with RTL layout, i18next integration, and a fully responsive UI.",
      category: "Project",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement5.svg",
      title: "Performance Optimization",
      description:
        "Improved page performance by reducing unnecessary re‑renders, applying memoization, and optimizing component structure.",
      category: "Optimization",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement6.svg",
      title: "Reusable Component Architecture",
      description:
        "Developed scalable, reusable components using TypeScript and React Hook Form to ensure maintainability and faster development.",
      category: "Code Quality",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/skill9.svg",
      title: "Interactive UI Effects & Animations",
      description:
        "Implemented hover effects, glow interactions, blur animations, and smooth transitions using Framer Motion and TailwindCSS.",
      category: "UI/UX",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement8.svg",
      title: "Component‑Driven Architecture",
      description:
        "Built modular, scalable structures using React, Zustand, React Query, Axios, and React Hook Form for efficient data handling.",
      category: "Code Quality",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement9.svg",
      title: "Persian & RTL Interface Development",
      description:
        "Designed and implemented fully RTL‑compatible Persian interfaces with proper typography, spacing, and UX adjustments.",
      category: "UI/UX",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement10.svg",
      title: "API Integration & Data Management",
      description:
        "Fetched and displayed dynamic data using Axios, React Query caching, and Zustand state management.",
      category: "Backend Integration",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement11.svg",
      title: "Project Deployment on Vercel",
      description:
        "Deployed multiple projects on Vercel with optimized settings for speed, SEO, and smooth CI/CD workflow.",
      category: "Deployment",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement12.svg",
      title: "Version Control with Git & GitHub",
      description:
        "Used Git workflow for project organization, branching, commits, and documentation across multiple real projects.",
      category: "Collaboration",
    },
    {
      id: uuidv4(),
      year: "2024",
      icon: "/svg/achivement13.svg",
      title: "Accessibility‑Focused UI",
      description:
        "Applied accessibility principles such as proper alt text, semantic HTML, focus order, and color contrast improvements.",
      category: "Accessibility",
    },
    {
      id: uuidv4(),
      year: "2025",
      icon: "/svg/achivement14.svg",
      title: "Familiarity with Jira & Scrum Methodology",
      description:
        "Gained hands‑on experience working with Scrum boards, tasks, user stories, and workflow management in Jira to understand agile development processes.",
      category: "Workflow",
    },
  ]);
};
