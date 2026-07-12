"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Project } from "./ProjectsData"
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[#242848]
          bg-[#0D101A]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#7B6EF6]
          hover:shadow-[0_0_40px_rgba(123,110,246,0.25)]
        "
      >
        {/* Purple Glow */}
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#7B6EF6]/10 blur-[90px] opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            sizes="45"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Hover Buttons */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-8 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={project.live}
              target="_blank"
              className="rounded-xl bg-[#7B6EF6] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6656F0]"
            >
              Live Demo
            </Link>

            {/* <Link
              href={project.github}
              target="_blank"
              className="rounded-xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:border-[#7B6EF6]"
            >
              <GitBranch  size={18} />
            </Link> */}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-8">
          <h3 className="text-3xl font-bold text-white transition group-hover:text-[#7B6EF6]">
            {project.title}
          </h3>

          {/* <p className="leading-8 text-gray-400">
            {project.description}
          </p> */}
          <p className="leading-8 text-gray-400">
            {project.description.length > 400
              ? `${project.description.slice(0, 400)}...`
              : project.description}
          </p>

          {project.description.length > 400 && (
            <button
              onClick={() => setOpen(true)}
              className="font-medium text-[#7B6EF6] hover:underline"
            >
              Read More
            </button>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-[#2A2E55]
                  bg-[#14182A]
                  px-3
                  py-1
                  text-xs
                  text-[#9B8DFF]
                  transition
                  group-hover:border-[#7B6EF6]
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-3">
            <Link
              href={project.live}
              target="_blank"
              className="font-medium text-[#7B6EF6] transition hover:text-white"
            >
              View Project
            </Link>

            <ArrowUpRight
              className="transition duration-300 group-hover:rotate-45 group-hover:text-[#7B6EF6]"
              size={22}
            />
          </div>
        </div>
      </div>
      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;