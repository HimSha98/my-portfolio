export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pickdrox",
    description: "...",
    image: "/images/projects/pickdrox.jpeg",
    technologies: ["Next.js", "Express.js", "Redux","Tailwind","MongoDb"],
    github: "",
    live: 'https://www.pickdrox.com/',
    featured: true
  },

  {
    id: 2,
    title: "Visa2Fly",
    description: "...",
    image: "/images/projects/visa2fly.png",
    technologies: ["Express.js","MongoDB","Tailwind", "Angular"],
    github: "",
    live: "https://visa2fly.com/"
  },

  {
    id: 3,
    title: "LoveChat",
    description: "...",
    image: "",
    technologies: ["React","Node","MongoDB"],
    github: "",
    live: ""
  },

  {
    id: 4,
    title: "Chat Application",
    description: "...",
    image: "",
    technologies: ["Next.js","Socket.IO","MongoDB","Redis"],
    github: "",
    live: ""
  }
];