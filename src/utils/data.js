import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Globe,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// Make sure to add the correct file extension (.jpg / .png) or keep commented out if unused
// import Personal from "../assets/images/personal.jpg"; 

import Aura from "../assets/images/Aura_Parfum.png";
import Forever from "../assets/images/Forever.png";

export const SKILLS_CATEGORY = [
  {
    title: "Backend (Primary Focus)",
    icon: Server,
    description: "Building scalable server-side logic and RESTful APIs",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Express.js", level: 85, color: "bg-gray-700" },
      { name: "MongoDB", level: 80, color: "bg-emerald-600" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
      { name: "JWT Auth", level: 82, color: "bg-purple-600" },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting modern, responsive web interfaces",
    skills: [
      { name: "React", level: 85, color: "bg-blue-500" },
      { name: "JavaScript (ES6+)", level: 88, color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      { name: "HTML5 / CSS3", level: 92, color: "bg-orange-600" },
    ],
  },
  {
    title: "Mobile (In Progress)",
    icon: Smartphone,
    description: "Learning cross-platform mobile development",
    skills: [
      { name: "React Native", level: 65, color: "bg-sky-500" },
      { name: "Mobile UI Design", level: 70, color: "bg-indigo-500" },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    description: "Managing data and deployment workflows",
    skills: [
      { name: "MongoDB / Mongoose", level: 82, color: "bg-green-600" },
      { name: "Git & GitHub", level: 85, color: "bg-red-500" },
      { name: "Postman", level: 88, color: "bg-orange-500" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
    ],
  },
];
export const TECH_STACK = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Vite",
  "Postman",
  "Vercel",
];

export const PROJECTS = [
  {
    id: 1,
    title: "Aura Parfums Platform",
    description:
      "A full-featured perfume online store featuring interactive catalog browsing, seamless shopping cart management, and modern responsive design.",
    image: Aura,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "http://aura-parfums-rouge.vercel.app/",
    githubUrl: "https://github.com/koull-Ahmed/Aura-Parfums",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "FOREVER E-Commerce Store",
    description:
      "A modern, responsive e-commerce web application with collection filtering, user authentication UI, cart management, and product search.",
    image: Forever,
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://forever-frontend-eight-omega.vercel.app/",
    githubUrl: "https://github.com/koull-Ahmed/Forever",
    featured: true,
    category: "Full Stack",
  },
];

export const STATS = [
  { number: "+4", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML and CSS. Built my first real-world project—a website for the Fikra Tech Club in Touggourt.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Core Foundations & Baccalaureate",
    company: "Self-taught & High School",
    description:
      "Earned my Baccalaureate degree while continuing to solidify core programming fundamentals and computer science basics.",
    icon: Globe,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Full-Stack Bootcamp Certification",
    company: "Udemy (Angela Yu)",
    description:
      "Completed comprehensive Full-Stack Web Development Bootcamp covering React, Node.js, Express, databases, and modern web deployment.",
    icon: Award,
    color: "bg-green-500",
  },
  {
    year: "2026",
    title: "Building & Freelance Focus",
    company: "Present",
    description:
      "Actively building production-ready web projects, strengthening backend architecture, and seeking my first freelance client opportunities.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];

export const PASSIONS = [
  {
    title: "Backend Architecture",
    description: "Designing RESTful APIs, database schemas, and server-side logic.",
    icon: Server,
  },
  {
    title: "Mobile Development Aspirations",
    description: "Actively learning React Native & Flutter to build cross-platform mobile apps.",
    icon: Smartphone,
  },
  {
    title: "Full-Stack Web Apps",
    description: "Connecting responsive React frontends with robust backend services.",
    icon: Code2,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/koull-Ahmed",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/ahmed-chaker-koull-5627a62a9",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/Koull_ahmed",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:ahmedchakerkoull@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Algeria",
    value: "Algiers, Algeria",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmedchakerkoull@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213664536118",
  },
];