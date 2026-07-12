"use client";

import { Code2, BriefcaseBusiness, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090B14] py-28"
    >
      {/* Glow */}
      <div className="absolute left-0 top-16 h-80 w-[500px] rounded-full bg-[#7B6EF6]/15 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B6EF6]/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
          <Code2 className="text-[#7B6EF6]" size={18} />

          <span className="text-white">About Me</span>
        </div>

        {/* Heading */}

        <h2 className="max-w-5xl text-2xl font-bold leading-tight text-white md:text-5xl">
          Building modern web applications that are fast, scalable and crafted
          for exceptional user experiences.
        </h2>

        {/* Description */}

        <div className="mt-3 max-w-4xl space-y-6 text-lg leading-8 text-gray-400">
          <p className="mb-2">
            I'm <span className="text-white">Himanshu Sharma</span>, a Frontend
            Engineer with <span className="text-white">4.5+ years</span> of
            experience building responsive and high-performance web
            applications using React, Next.js, TypeScript and modern frontend
            technologies.
          </p>

          <p className="mb-2">
            I enjoy transforming complex business requirements into intuitive,
            scalable products with clean architecture, reusable components and
            excellent user experiences.
          </p>

          <p>
            Recently, I've been working with the MERN stack, Redux Toolkit,
            Zustand, Socket.IO, Tailwind CSS and MongoDB while continuously
            expanding my backend knowledge.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Experience */}

          <div className="rounded-3xl border border-[#2A2E55] bg-[#0E111B] p-8 transition duration-500 hover:border-[#7B6EF6] hover:shadow-[0_0_40px_rgba(123,110,246,0.2)]">
            <BriefcaseBusiness
              className="mb-6 text-[#7B6EF6]"
              size={32}
            />

            <h3 className="text-4xl font-bold text-white">4.5+</h3>

            <p className="mt-2 text-gray-400">
              Years of Professional Experience
            </p>
          </div>

          {/* Projects */}

          <div className="rounded-3xl border border-[#2A2E55] bg-[#0E111B] p-8 transition duration-500 hover:border-[#7B6EF6] hover:shadow-[0_0_40px_rgba(123,110,246,0.2)]">
            <Code2 className="mb-6 text-[#7B6EF6]" size={32} />

            <h3 className="text-4xl font-bold text-white">4+</h3>

            <p className="mt-2 text-gray-400">
              Real-world Projects Delivered
            </p>
          </div>

          {/* Education */}

          <div className="rounded-3xl border border-[#2A2E55] bg-[#0E111B] p-8 transition duration-500 hover:border-[#7B6EF6] hover:shadow-[0_0_40px_rgba(123,110,246,0.2)]">
            <GraduationCap
              className="mb-6 text-[#7B6EF6]"
              size={32}
            />

            <h3 className="text-4xl font-bold text-white">MCA</h3>

            <p className="mt-2 text-gray-400">
              Chandigarh University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;