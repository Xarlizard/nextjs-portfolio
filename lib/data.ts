import React from "react";
import { FaReact, FaNodeJs, FaCloud } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
export const circleImg = "/images/circleImg.png";
export const codeticketsImg = "/images/codeticketsImg.png";
export const tldrawImg = "/images/tldrawImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "FRONTEND WEB DEVELOPER (REACT)",
    company: "APLICACIONES WEB MARDO, S.L. (Codetickets)",
    location: "Mataro (remote), Spain",
    description:
      "Currently driving frontend development at APLICACIONES WEB MARDO, S.L. in charge of the solo-team at Codetickets, utilizing React 19.0 and related technologies to build robust and scalable applications. Proficient in integrating with custom APIs built on RESTful/CRUD principles and implementing Server-Side Rendering (SSR) with the frameworks ReactRouter v7 (Remix).",
    icon: React.createElement(FaReact),
    date: "20/11/2024 - CURRENT",
  },
  {
    title: "FULLSTACK WEB DEVELOPER",
    company: "Pixelimperium S.L.",
    location: "Ibiza (remote), Spain",
    description:
      "Successfully managed the full lifecycle of eCommerce projects, leveraging a diverse tech stack including React and Next.js for the frontend and Node.js, Python, and Java for backend development. Experienced in deploying and managing applications on various cloud platforms (AWS, Cloudflare Pages, Vercel, Netlify).",
    icon: React.createElement(SiNextdotjs),
    date: "12/2022 - 09/2024",
  },
  {
    title: "IT CONSULTANT & APP(S) DEVELOPER",
    company: "DR FIN&TRUST",
    location: "Molins De Rei, Spain",
    description:
      "Contributed to the development of finance-focused applications using React & React Native on the frontend and NodeJS and Java on the backend, deployed on AWS and Oracle Cloud Servers. Took a leadership role in training junior developers.",
    icon: React.createElement(FaReact),
    date: "05/2022 - 09/2022",
  },
  {
    title: "IT CONSULTANT & WEB DEVELOPER JUNIOR",
    company: "Businessprinter, S.L.",
    location: "Hospitalet de Llobregat, Spain",
    description:
      "Oversaw and co-managed the IT department and a team of technicians and developers, team in charge of developing and maintaining web applications using technologies such as React + Node.js, PHP (Wordpress), and Angular+Java.",
    icon: React.createElement(FaNodeJs),
    date: "05/2020 - 05/2022",
  },
  {
    title: "SYSTEM ADMIN (L2) & JUNIOR FRONTEND DEVELOPER",
    company: "MagnumObject, S.L.",
    location: "Cornellà, Spain",
    description:
      "Gained initial experience with React development while managing IT systems and networks for B2B clients.",
    icon: React.createElement(FaCloud),
    date: "05/2017 - 05/2020",
  },
] as const;

export const projectsData = [
  {
    title: "Codetickets",
    description:
      "Ticketing Saas as vendor portal dashboard/retail for some public and private institutions, managing and serving their event tickets.",
    tags: ["React", "Node.js", "Cloudflare R2 Database", "Bootstrap", "AWS"],
    imageUrl: codeticketsImg,
  },
  {
    title: "TLDRAW with Nextjs",
    description:
      "Tldraw editor made with React and shadcdn, integrating AI with OpenAI API to generate custom SVG forms.",
    tags: ["tRPC", "React", "TypeScript", "Next.js", "Tailwind", "Shadcdn"],
    imageUrl: tldrawImg,
  },
  {
    title: "Circle",
    description:
      "A simple project landing page featuring a modern UI layout, responsive and designed for Ironhack's Bootcamp.",
    tags: ["React", "CSS Modules", "ReactRouter", "Bootstrap", "Axios"],
    imageUrl: circleImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Astro",
  "Express",
  "tRPC",
  "Python",
  "Shadcdn",
  "Framer Motion",
] as const;
