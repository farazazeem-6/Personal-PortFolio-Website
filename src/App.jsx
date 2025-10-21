import React, {
  createContext,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import LocomotiveScroll from "locomotive-scroll";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
const locomotiveScroll = new LocomotiveScroll();

const ThemeContext = createContext();

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      class: "is-inview",
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div className={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div data-scroll-container ref={scrollRef}>
          <Header scrollRefs={{ homeRef, aboutRef, projectsRef, contactRef,skillsRef }} />
          <Hero ref={homeRef} />
          <About ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Project ref={projectsRef} />
          <Contact ref={contactRef} />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };
