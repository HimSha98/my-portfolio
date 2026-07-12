import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
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
