"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Project } from "./ProjectsData";

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
      <div className="relative max-h-[90vh] w-full max-w-4xl rounded-3xl border border-[#2A2E55] bg-[#0D101A]">

        {/* Close */}

        <button
            onClick={onClose}
            className="
                absolute
                right-5
                top-5
                z-50
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black/70
                text-white
                backdrop-blur-md
                transition
                hover:bg-[#7B6EF6]
            "
        >
          <X size={20} className="text-dark" />
        </button>

        {/* Image */}

        <div className="relative h-[350px] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-3xl"
          />
        </div>

        <div className="p-8">

          <h2 className="mb-6 text-4xl font-bold text-white">
            {project.title}
          </h2>

          <p className="leading-8 text-gray-400 whitespace-pre-line">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#2A2E55] bg-[#14182A] px-4 py-2 text-sm text-[#9B8DFF]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;