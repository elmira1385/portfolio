import { v4 as uuidv4 } from 'uuid';
export const GET=async()=>{
 return Response.json([
    {
        id:uuidv4(),
        title:"Programming Languages",
        icon:"/svg/skill1.svg",
        description:["JavaScript","TypeScript","HTML/CSS"]
    },
    {
        id:uuidv4(),
        title:"Interactivity & Visuals",
        icon:"/svg/skill2.svg",
        description:["Framer Motion","Swiper","ApexCharts"]
    },
    {
        id:uuidv4(),
        title:"Tools & Platforms",
        icon:"/svg/skill3.svg",
        description:["Git & GitHub","Netlify","ESlint/Prettier","Chrome DevTools","VS Code","Figma"]
    },
    {
        id:uuidv4(),
        title:"Frontend Frameworks",
        icon:"/svg/skill4.svg",
        description:["React","Next.js","React Router","React Query","Zustand","Redux","React Hook Form","Pwa"]
    },
    {
        id:uuidv4(),
        title:"Utility Libraries",
        icon:"/svg/skill5.svg",
        description:["i18next","UUID","clsx", "React Testing Library"]
    },
    {
        id:uuidv4(),
        title:"Workflow & Collaboration",
        icon:"/svg/skill6.svg",
        description:["Agile & Scrim","Jira","Version Control Workflow (Branches,commits,..)"]
    },
    {
        id:uuidv4(),
        title:"Dta & API Management",
        icon:"/svg/skill7.svg",
        description:["Axios","Data Fetching & Caching Strategies","State Management(Zustand,React Query)"]
    },
    {
        id:uuidv4(),
        title:"Development Practices",
        icon:"/svg/skill8.svg",
        description:["Performance Optimization","Clean Architecture","Reusable Components","Project Structuring","Debugging"]
    },
    {
        id:uuidv4(),
        title:"Styling & UI",
        icon:"/svg/skill9.svg",
        description:["TailwindCSS","Responsive Design & Mobile-first","RTL","Component-Based Architecture","UI/UX Principles","Accessibility Basics"]
    },
 ])
}