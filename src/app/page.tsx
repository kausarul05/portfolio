import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
