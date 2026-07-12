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
    title: "Vetster",
    description: "Contributed to the frontend development of a veterinary telemedicine platform by building responsive and reusable React components using React.js and TypeScript. Developed appointment booking and scheduling interfaces with calendar-based slot selection and real-time availability. Created veterinarian dashboard modules, including analytics widgets, appointment management screens, and reusable table and filtering components. Integrated REST APIs for patient history, consultation records, and booking workflows. Optimized component rendering and implemented performance improvements to reduce page load times. Enhanced the application's mobile responsiveness and ensured a seamless user experience across devices. Collaborated closely with backend developers and designers to deliver scalable, maintainable, and production-ready features following modern frontend best practices.",
    image: "/images/projects/vetster.png",
    technologies: ["React","Node","MongoDB"],
    github: "",
    live: "https://vetster.com/"
  },

  {
    id: 2,
    title: "Visa2Fly",
    description: "Developed and maintained the backend architecture of a visa application platform using Node.js and Express.js. Designed and implemented secure RESTful APIs, controller logic, and route handlers to support visa processing, user management, and application workflows. Integrated Nodemailer to automate transactional emails, including application confirmations, status updates, and user notifications, while organizing a scalable email delivery flow. Collaborated with frontend developers to ensure seamless API integration and efficient data communication. Implemented robust input validation, centralized error handling, and optimized API performance to deliver reliable and maintainable backend services. Followed clean coding standards and actively participated in feature development, testing, and deployment within an Agile development environment.",
    image: "/images/projects/visa2fly.png",
    technologies: ["Express.js","MongoDB","Tailwind", "Angular"],
    github: "",
    live: "https://visa2fly.com/"
  },

  {
    id: 3,
    title: "Pickdrox",
    description: "Developed and maintained the **PickDrox** logistics platform using **Next.js, TypeScript, Node.js, Express.js, MongoDB, Redux Toolkit, and Tailwind CSS**, building scalable and responsive full-stack applications. Designed and implemented core modules including a **Support Ticket Management System**, **Document Verification System**, **Rating & Review System**, and dynamic **Contact Forms** with secure business logic. Built reusable React components with **conditional rendering**, **protected routes**, **role-based redirection**, and authentication flows to ensure secure access across the application. Implemented comprehensive **login, signup, email and phone verification**, duplicate account detection, and form validation using **Yup**. Developed and integrated **REST APIs**, configured **NodeMailer** for conditional email notifications, handled secure file and image uploads using **Multer**, and managed invoice **PDF generation** with automatic server-side cleanup after downloads. Utilized **Moment.js** for date and time management, integrated third-party libraries such as **Lucide React** and **React Icons**, and managed application state efficiently using **Redux Toolkit**. Additionally, developed and managed the **Admin Dashboard** with **Role-Based Access Control (RBAC)** for Admin, Accountant, and other team members, enabling user verification, support ticket resolution, route and pickup management, and overall administrative operations while following clean architecture, reusable code practices, and responsive UI principles.",
    image: "/images/projects/pickdrox.jpeg",
    technologies: ["Next.js", "Express.js", "Redux","Tailwind","MongoDb"],
    github: "",
    live: 'https://www.pickdrox.com/',
    featured: true
  },

  {
    id: 4,
    title: "Chat Application",
    description: "Coming Soon...",
    image: "/images/projects/chat-soon.png",
    technologies: ["React", "Node", "Express", "MongoDB", "Socket.IO", "Resend", "Daisy UI"],
    github: "",
    live: ""
  }
];