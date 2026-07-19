import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(() => {

    const saved = localStorage.getItem("theme");

    return saved ? saved === "dark" : true;

  });

  useEffect(() => {

    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  return (

    <div className="page-fade">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Projects />

      <Research />

      <Skills />

      <Certifications />

      <Education />

      <About />

      <Contact />

      <Footer />

    </div>

  );

}

export default App;