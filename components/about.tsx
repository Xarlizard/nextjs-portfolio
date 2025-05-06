"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A seasoned{" "}
        <span className="font-medium">Senior React Fullstack Developer</span>{" "}
        with a strong frontend focus and comprehensive backend capabilities.
        Extensive experience in building sophisticated web applications using
        the React ecosystem, including proficiency in{" "}
        <span className="font-medium">React 19.0</span>,{" "}
        <span className="font-medium">React Router v7</span>, and modern build
        tools like <span className="font-medium">Nextjs/Vite/Astro</span>.
        Expertise in developing and consuming{" "}
        <span className="font-medium">RESTful APIs</span> and implementing{" "}
        <span className="font-medium">Server-Side Rendering (SSR)</span> for
        enhanced performance and SEO. Proven ability to collaborate effectively
        within cross-functional teams (agile), apply modern web development
        practices, and ensure adherence to accessibility guidelines.
      </p>
    </motion.section>
  );
}
