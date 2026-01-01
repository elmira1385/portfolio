import About from "./UI/About";
import Achivement from "./UI/Achivement";
import Project from "./UI/Project";

import Section1 from "./UI/Section1";
import Skills from "./UI/Skills";

export default function Home() {
  return (
    <div>
      <Section1 />
      <About />
      <Project/>
      <Skills/>
      <Achivement/>
    </div>
  );
}
