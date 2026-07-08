"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  image: string;
  height: number;
  width: number;
}

const skills: Skill[] = [
    {
        name: "HTML",
        image: "/images/skills/html.png",
        height: 56,
        width: 56,
    },
    {
        name: "Scss",
        image: "/images/skills/scss.png",
        height: 56,
        width: 56,
    },
    {
        name: "Tailwind",
        image: "/images/skills/tailwindCSS.png",
        height: 56,
        width: 56,
    },
    {
        name: "JS",
        image: "/images/skills/js.png",
        height: 56,
        width: 56,
    },
    {
        name: "Typescript",
        image: "/images/skills/typescript.png",
        height: 120,
        width: 120,
    },
    {
        name: "React",
        image: "/images/skills/react.png",
        height: 120,
        width: 120,
    },
    {
        name: "Next",
        image: "/images/skills/next.png",
        height: 110,
        width: 110,
    },
    {
        name: "Node",
        image: "/images/skills/nodeJS.png",
        height: 90,
        width: 90,
    },
    {
        name: "Express",
        image: "/images/skills/expressJS.png",
        height: 65,
        width: 65,
    },
    {
        name: "mongodb",
        image: "/images/skills/mongoDB.png",
        height: 70,
        width: 70,
    },
    {
        name: "Arcject",
        image: "/images/skills/arcjet.png",
        height: 140,
        width: 140,
    },
    {
        name: "Rtk",
        image: "/images/skills/rtk.png",
        height: 120,
        width: 120,
    },
    // {
    //     name: "Zustand",
    //     image: "/images/skills/zustand.png",
    //     height: 100,
    //     width: 100,
    // },
    // {
    //     name: "Python",
    //     image: "/images/skills/python.png",
    //     height: 80,
    //     width: 80,
    // },
    // {
    //     name: "Django",
    //     image: "/images/skills/django.png",
    //     height: 100,
    //     width: 100,
    // },
    {
        name: "Resend",
        image: "/images/skills/resend.png",
        height: 24,
        width: 24,
    },
];

const duplicatedSkills = [...skills, ...skills];

const Skills = () => {

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
        slider.scrollLeft += 1;

        if (
        slider.scrollLeft >=
        slider.scrollWidth - slider.clientWidth
        ) {
        slider.scrollLeft = 0;
        }
    }, 20);

    return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#040612] py-14">
        {/* Background Glow */}
        <div className="absolute left-[-200px] top-10 h-[300px] w-[800px] rotate-[20deg] rounded-full bg-indigo-500/20 blur-[120px]" />

        <div className="absolute left-[-100px] top-[300px] h-[250px] w-[700px] rotate-[20deg] rounded-full bg-indigo-500/20 blur-[120px]" />

        {/* Left Bubble */}
        <div className="absolute left-10 top-16 hidden md:block">
            <div className="relative rounded-full bg-white/10 px-6 py-3 backdrop-blur-xl">
            <p className="font-medium text-white">Engineer</p>

            <div className="absolute left-8 top-full h-4 w-4 rotate-45 bg-white/10" />
            </div>
        </div>

        {/* Right Bubble */}
        <div className="absolute right-10 top-16 hidden md:block">
            <div className="relative rounded-full bg-white/10 px-6 py-3 backdrop-blur-xl">
            <p className="font-medium text-white">Developer</p>

            <div className="absolute right-8 top-full h-4 w-4 rotate-45 bg-white/10" />
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}
            <div className="text-center">
            <h2 className="text-5xl font-bold text-white md:text-6xl">
                Skills & Technologies
            </h2>

            <p className="mt-3 text-lg text-gray-400">
                Tools I use to build, ship, and scale.
            </p>
            </div>

            {/* Skills */}
            <div
                ref={sliderRef}
                className="
                    mt-14
                    flex
                    gap-10
                    overflow-x-auto
                    no-scrollbar
                "
                >
                {duplicatedSkills.map((skill, index) => (
                    <div
                    key={index}
                    className="flex min-w-[180px] flex-col items-center justify-center gap-2"
                    >
                    <Image
                        src={skill.image}
                        alt={skill.name}
                        className="object-contain"
                        width={skill.width}
                        height={skill.height}
                    />

                    {/* <p className="text-gray-400">
                        {skill.name}
                    </p> */}
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;