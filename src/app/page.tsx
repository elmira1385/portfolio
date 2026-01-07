import About from "./UI/About";
import Achivement from "./UI/Achivement";
import Contact from "./UI/Contact";
import MoveUp from "./UI/MoveUp";
import Project from "./UI/Project";

import Section1 from "./UI/Section1";
import Skills from "./UI/Skills";

export default function Home() {
  return (
    <div>
      <Section1 />
      <About />
      <Project />
      <Skills />
      <Achivement />
      <Contact />
      <MoveUp />
    </div>
  );
}
