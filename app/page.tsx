import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
    </>
  );
}
