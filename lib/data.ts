import { url } from "inspector";
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
    name: "Certificates",
    hash: "#certificates",
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
    url: "https://codetickets2.pages.dev/portal/zumzeigcooperativa",
  },
  {
    title: "TLDRAW with Nextjs",
    description:
      "Tldraw editor made with React and shadcdn, integrating AI with OpenAI API to generate custom SVG forms.",
    tags: ["tRPC", "React", "TypeScript", "Next.js", "Tailwind", "Shadcdn"],
    imageUrl: tldrawImg,
    url: "https://vidext.netlify.app/",
  },
  {
    title: "Circle",
    description:
      "A simple project landing page featuring a modern UI layout, responsive and designed for Ironhack's Bootcamp.",
    tags: ["React", "CSS Modules", "ReactRouter", "Bootstrap", "Axios"],
    imageUrl: circleImg,
    url: "https://ironhack-charlie-final-project-1.pages.dev/",
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

export const hostingProviders = [
  { name: "Cloudflare", logo: "/images/logo_cloudflare.png", link: "https://portfolio.app-org-es.workers.dev/" },
  { name: "Netlify", logo: "/images/logo_netlify.png", link: "https://europass.netlify.app/" },
  { name: "Vercel", logo: "/images/logo_vercel.png", link: "https://vercel.com" },
  { name: "Github", logo: "/images/logo_github.png", link: "https://github.com/Xarlizard/xarlizard/tree/gh-pages" },
] as const;

export const certificatesData = [
  {
    name: "Smart Contracts with Applications in FSC",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_9.png",
    url: "https://trust-food.ubitech.eu/certificates/fc623567638f4d20a0b64a1f603591c2",
  },
  {
    name: "Advanced Blockchain Skills Certificate",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_10.png",
    url: "https://trust-food.ubitech.eu/certificates/ca861786c35e9605e0ae63c2fc3cadc6",
  },
  {
    name: "MiCA Regulation and CBDC's Certificate",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_11.png",
    url: "https://trust-food.ubitech.eu/certificates/350a6387a1989ee629d3405a6fa27f31",
  },
  {
    name: "Ethical & Governance in Blockchain FGC's",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_12.png",
    url: "https://trust-food.ubitech.eu/certificates/6be0ca94ae66f1d034e8ea433cf63a32/",
  },
  {
    name: "Google Ads Apps Certificate",
    logo: "/images/icon-google.svg",
    image: "/images/certificate_1.png",
    url: "https://skillshop.exceedlms.com/student/award/zKJHzMaUS4PS9deKMhTCrEUk?id=277115609",
  },
  {
    name: "Bitcoin101 Certificate",
    logo: "/images/icon-bccouncil.svg",
    image: "/images/certificate_2.png",
    url: "https://www.credential.net/7b011d83-3994-4ef5-9326-0c1904195941",
  },
  {
    name: "Mozilla's JavaScript Certificate",
    logo: "/images/icon-mozilla.png",
    image: "/images/certificate_3.png",
    url: "https://www.linkedin.com/learning/certificates/30df81127d966419845ad25db8d3b80bce960c35dd5acae2fca6b3c6e561bd29",
  },
  {
    name: "Digital Forensics Certificate",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_4.png",
    url: "https://codered.eccouncil.org/certificate/0e565d4d-12a8-4ba5-a9eb-7c4ee0913a70",
  },
  {
    name: "Diploma in Data Analytics",
    logo: "/images/icon-elearning.png",
    image: "/images/certificate_5.png",
    url: "https://www.linkedin.com/in/charlie-rios/details/certifications/1711731128232/single-media-viewer/?type=DOCUMENT&profileId=ACoAACSxPW8BiSbXrvOKN8pEP5dti-or4mgIDD0",
  },
  {
    name: "Oxford's Data Analytics",
    logo: "/images/icon-oxford.svg",
    image: "/images/certificate_7.png",
    url: "https://www.linkedin.com/in/charlie-rios/details/certifications/183373074/multiple-media-viewer/?profileId=ACoAACSxPW8BiSbXrvOKN8pEP5dti-or4mgIDD0&treasuryMediaId=1711728186408&type=DOCUMENT",
  },
  {
    name: "Blockchain Developer Training",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_6.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI4OTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80OTkyMTk5XzE3MTE2MzM4NzIucG5nIiwidXNlcm5hbWUiOiJDaGFybGllIFJpb3MgUHVqYWRvIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3111%2FBlockchain-Certification-Training%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1362757859895180075&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8suTsnI8MjK8UyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAOb3IYBBAAAA",
  },
  {
    name: "Introduction to MERN Stack",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_8.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk5MzM2NF8xNzExNjU1MjUxLnBuZyIsInVzZXJuYW1lIjoiQ2hhcmxpZSBSaW9zIFB1amFkbyJ9&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1362757859895180075&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd09xdqkqMc%2FK8UyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGRdloVBAAAA",
  },
  {
    name: "Network Defense Certificate",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_13.png",
    url: "https://codered.eccouncil.org/certificate/595a000a-9b7b-4e3d-9399-bb2f03a87456",
  },
  {
    name: "Jira Advanced Certification",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_14.png",
    url: "https://codered.eccouncil.org/certificate/86d0552f-0f0d-462f-b116-4bb946ce7f03",
  },
  {
    name: "Advanced Web Analytics",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_16.png",
    url: "https://simpli-web.app.link/e/ui9AtiImqIb",
  },
  {
    name: "Advanced Content Marketing",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_16.png",
    url: "https://simpli-web.app.link/e/smI3dHM9BIb",
  },
] as const;