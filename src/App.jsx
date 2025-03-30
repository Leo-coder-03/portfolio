import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/hero/parallax/Parallax";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="skills"/></section>
    <section id="Skills">
        <Skills />
      </section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
    <section id="About">About</section>
  </div>
};

export default App;
