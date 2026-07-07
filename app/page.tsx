import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <Skills />
        <Projects />
    </>
  );
}
