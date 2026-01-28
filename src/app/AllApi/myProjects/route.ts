import { v4 as uuidv4 } from "uuid";
export const GET =async()=>{
 return Response.json([
        {
          id: uuidv4(),
          img: "image/resumem.png",
          svg: "svg/github.svg",
          title: "Resume Builder",
          description:
            "A Web app for creating and managing multiple resumes, After logging in ,each user can create ,resume,or delete their own resumes",
          features: ["React", "TypeScript", "Tailwind","zustand","React Query","Axios"],
          button1: "Github",
          href:"https://github.com/elmira1385/Resume_Builder",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/green-shop.png",
          svg: "svg/github.svg",
          title: "Green Card",
          description:
            "A simple e‑commerce web app where users can log in, browse products, view product details, add items to the cart, and manage them",
          features: ["Next", "TypeScript", "Tailwind","zustand","React Query","Axios"],
          button1: "Github",
          href:"https://github.com/elmira1385/green-cart",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/rental.png",
          svg: "svg/github.svg",
          title: "Car Rental",
          description:
            "A responsive car‑listing app that loads all cars from an API.Includes smooth animations across mobile and desktop layouts.",
          features: ["React", "TypeScript", "Tailwind","zustand","framer-Motion","Axios"],
          button1: "Github",
          href:"https://github.com/elmira1385/Car_Rentel",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/hamrah-man.png",
          svg: "svg/github.svg",
          title: "Hamrah Man Multi‑Language ",
          description:
            "A bilingual website with multiple pages, sliders, and reusable UI components.Fully responsive with smooth language switching.",
          features: ["React", "TypeScript", "Tailwind","zustand","i18next","swiper"],
          button1: "Github",
          href:"https://github.com/elmira1385/Hamrah_Man",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/game1.png",
          svg: "svg/github.svg",
          title: "Bug Hunt Game ",
          description:
            "A simple JavaScript game where players pick a bug character.Bugs appear randomly on the screen during gameplay.Players try to catch as many as possible before time runs out.A live counter tracks the number of bugs caught.",
          features: ["Html", "Css", "JavaScript"],
          button1: "Github",
          href:"https://github.com/elmira1385/Catch_The_Insect",
          button2: "Go to Live",
        },
      
 ])
}