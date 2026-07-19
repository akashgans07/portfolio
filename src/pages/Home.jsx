import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import LearningPreview from "../components/LearningPreview";
import Education from "../components/Education";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Research />
      <Skills />
      <LearningPreview />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;