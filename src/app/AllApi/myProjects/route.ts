import { v4 as uuidv4 } from "uuid";
export const GET =async()=>{
 return Response.json([
        {
          id: uuidv4(),
          img: "image/example.png",
          svg: "svg/github.svg",
          title: "MSR Tailor Store",
          description:
            "A application with next.js for order placement and checkout functionality for a tailor store.",
          features: ["Html", "Tailwind", "javascript"],
          button1: "Github",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/example.png",
          svg: "svg/github.svg",
          title: "MSR Tailor Store",
          description:
            "A application with next.js for order placement and checkout functionality for a tailor store.",
          features: ["Html", "Tailwind", "javascript"],
          button1: "Github",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/example.png",
          svg: "svg/github.svg",
          title: "MSR Tailor Store",
          description:
            "A application with next.js for order placement and checkout functionality for a tailor store.",
          features: ["Html", "Tailwind", "javascript"],
          button1: "Github",
          button2: "Go to Live",
        },
        {
          id: uuidv4(),
          img: "image/example.png",
          svg: "svg/github.svg",
          title: "MSR Tailor Store",
          description:
            "A application with next.js for order placement and checkout functionality for a tailor store.",
          features: ["Html", "Tailwind", "javascript"],
          button1: "Github",
          button2: "Go to Live",
        },
      
 ])
}