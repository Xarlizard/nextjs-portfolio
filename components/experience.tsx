"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme = "light" } = useTheme(); // Default to "light" theme during SSR

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 flex flex-col items-center"
    >
      <SectionHeading>My Experience</SectionHeading>
      <div className="relative w-full max-w-[48rem]">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className={`relative mb-12 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Icon */}
            <div
              className={`absolute top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              } transform -translate-y-1/2 ${
                index % 2 === 0
                  ? "-translate-x-1/2 left-1/2"
                  : "-translate-x-1/2 left-1/2"
              }`}
            >
              {experience.icon || <FaBriefcase />}
            </div>

            {/* Content */}
            <div
              className={`w-[calc(50%-2rem)] p-4 rounded-lg shadow-md ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              } ${index % 2 === 0 ? "text-left" : "text-right"}`}
            >
              <h3 className="font-semibold text-lg">{experience.title}</h3>
              <h4 className="text-sm text-gray-600 dark:text-gray-400">
                {experience.location}
              </h4>
              <p className="mt-2 text-sm">{experience.description}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {experience.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
