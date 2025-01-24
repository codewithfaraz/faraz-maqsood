export const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "MERN Stack Project",
    image: "https://via.placeholder.com/300",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    preview: "https://example.com", // optional
    categories: ["frontend", "backend", "fullstack"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "React Application",
    image: "https://via.placeholder.com/300",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com",
    // no preview link for this project
    categories: ["frontend"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Backend Service",
    image: "https://via.placeholder.com/300",
    tech: ["Node.js", "PostgreSQL", "Express"],
    github: "https://github.com",
    categories: ["backend"],
  },
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
];
