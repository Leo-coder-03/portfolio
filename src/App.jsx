import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/hero/parallax/Parallax";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import { useRef } from "react";
const App = () => {
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  return <div>
  <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <div id="Home">
      <Hero contactRef={contactRef} portfolioRef={portfolioRef}/>
      </div>
    </section>
    <section id="Services"><Parallax type="skills"/></section>
    <section id="Skills">
        <Skills />
      </section>
    <section id="Portfolio"
    ><Parallax type="portfolio"/></section>
    <div ref={portfolioRef}>
    <div id="Projects">
    <Portfolio/>
    </div>
    </div>
    <section id="Contact" ref={contactRef}>
      <Contact/>
    </section>
    {/* <section id="About">About</section> */}
  </div>
};

export default App;
