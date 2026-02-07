import { v4 as uuidv4 } from "uuid";
export const GET = async () => {
  return Response.json([
    {
      id: uuidv4(),
      img: "image/resumem.png",
      svg: "svg/github.svg",
      title: "Resume Builder",
      description:
        "A Web app for creating and managing multiple resumes, After logging in ,each user can create ,resume,or delete their own resumes",
      features: [
        "React",
        "TypeScript",
        "Tailwind",
        "zustand",
        "React Query",
        "Axios",
      ],

      href: "https://github.com/elmira1385/Resume_Builder",
      live:"https://resume-biulder-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/green-shop.png",
      svg: "svg/github.svg",
      title: "Green Card",
      description:
        "A simple e‑commerce web app where users can log in, browse products, view product details, add items to the cart, and manage them",
      features: [
        "Next",
        "TypeScript",
        "Tailwind",
        "zustand",
        "React Query",
        "Axios",
      ],

      href: "https://github.com/elmira1385/green-cart",
      live:"https://resume-biulder-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/rental.png",
      svg: "svg/github.svg",
      title: "Car Rental",
      description:
        "A responsive car‑listing app that loads all cars from an API.Includes smooth animations across mobile and desktop layouts.",
      features: [
        "React",
        "TypeScript",
        "Tailwind",
        "zustand",
        "framer-Motion",
        "Axios",
      ],

      href: "https://github.com/elmira1385/Car_Rentel",
    live:"https://car-rental-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/hamrah-man.png",
      svg: "svg/github.svg",
      title: "Hamrah Man Multi‑Language ",
      description:
        "A bilingual website with multiple pages, sliders, and reusable UI components.Fully responsive with smooth language switching.",
      features: [
        "React",
        "TypeScript",
        "Tailwind",
        "zustand",
        "i18next",
        "swiper",
      ],

      href: "https://github.com/elmira1385/Hamrah_Man",
      live:"https://hamrah-e-man-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/game.png",
      svg: "svg/github.svg",
      title: "Bug Hunt Game ",
      description:
        "A simple JavaScript game where players pick a bug character.Bugs appear randomly on the screen during gameplay.Players try to catch as many as possible before time runs out.A live counter tracks the number of bugs caught.",
      features: ["Html", "Css", "JavaScript", "Tailwind"],
      href: "https://github.com/elmira1385/Catch_The_Insect",
      live:"https://catch-insect-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/Kanban2.png",
      svg: "svg/github.svg",
      title: "Kanban",
      description:
        "A desktop-based Kanban board featuring Dark/Light mode for better usability. Users can add new tasks, write task details, and easily assign each task to a specific column such as To Do, In Progress, or Done",
      features: ["Html", "Css", "TypeScript", "Tailwind"],
      href: "https://github.com/elmira1385/Kanban",
      live:"https://kanban-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/go-green.png",
      svg: "svg/github.svg",
      title: "Go Green",
      description:
        "A desktop web project with a scroll-triggered slider, click-to-filter content, and multiple pages, featuring animations and interactive elements that provide a dynamic and engaging user experience.",
      features: ["Html", "Css", "TypeScript", "Tailwind"],
      href: "https://github.com/elmira1385/go_green",
      live:"https://resume-biulder-elmira.netlify.app/"
    },
    {
      id: uuidv4(),
      img: "image/rent-house.png",
      svg: "svg/github.svg",
      title: "Rent House",
      description:
        "A desktop web project with animated sliders showcasing houses from an API, featuring click-to-expand panels for interactive viewing and a smooth, engaging, and user-friendly experience.",
      features: ["Html", "Css", "JavaScript", "Tailwind"],
      href: "https://github.com/elmira1385/rent-house",
       live:"https://resume-biulder-elmira.netlify.app/"
    },
  ]);
};
