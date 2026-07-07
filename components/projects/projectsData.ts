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
    title: "DevTracker",
    description: "...",
    image: "/projects/devtracker.png",
    technologies: ["React","Redux","Tailwind","Firebase"],
    github: "",
    live: "",
    featured: true
  },

  {
    id: 2,
    title: "CodeShare",
    description: "...",
    image: "/projects/codeshare.png",
    technologies: ["Next.js","MongoDB","Tailwind"],
    github: "",
    live: ""
  },

  {
    id: 3,
    title: "EcoCart",
    description: "...",
    image: "/projects/ecocart.png",
    technologies: ["React","Node","MongoDB"],
    github: "",
    live: ""
  },

  {
    id: 4,
    title: "Chat Application",
    description: "...",
    image: "/projects/chatapp.png",
    technologies: ["Next.js","Socket.IO","MongoDB","Redis"],
    github: "",
    live: ""
  }
];