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
const locomotiveScroll = new LocomotiveScroll();

const ThemeContext = createContext();

function App() {
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
          <Header />
          <Hero />
          <About />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };
