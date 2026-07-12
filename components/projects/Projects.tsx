"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#090B14] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#7B6EF6]/15 blur-[130px]" />
      <div className="absolute right-0 bottom-10 h-[300px] w-[300px] rounded-full bg-[#7B6EF6]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-[#7B6EF6]/30 bg-[#7B6EF6]/10 px-5 py-2 text-sm text-[#A99EFF]">
            My Work
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of full-stack applications built with modern
            technologies, focusing on performance, scalability, and great user
            experience.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Bottom Button */}
        {/* <div className="mt-16 flex justify-center">
          <button
            className="
            rounded-xl
            border
            border-[#7B6EF6]/40
            px-8
            py-4
            text-white
            transition-all
            duration-300
            hover:border-[#7B6EF6]
            hover:bg-[#7B6EF6]
            hover:shadow-[0_0_30px_rgba(123,110,246,0.35)]
            cursor-pointer
          "
          >
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;