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
        <div className="absolute top-0 left-[10%] sm:left-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-600 transform sm:-translate-x-1/2"></div>

        {/* Timeline Items */}
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className={`relative mb-12 flex items-center ${
              index % 2 === 0
                ? "sm:justify-start justify-center"
                : "sm:justify-end justify-center"
            }`}
          >
            {/* Icon or Arrow */}
            <div
              className={`absolute top-0 w-8 h-8 rounded-full flex items-center justify-center transform -translate-y-1/2 ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black"
              } sm:block hidden`}
              style={{
                left: "50%", // Center the circle on the vertical bar
                transform: "translate(-50%, -50%)", // Center the circle itself
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                {experience.icon ? experience.icon : <FaBriefcase />}
              </div>
            </div>
            <div
              className="absolute top-0 w-4 h-4 transform -translate-y-1/2 sm:hidden"
              style={{ left: "10%" }}
            >
              <div
                className={`w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] ${
                  theme === "dark" ? "border-l-gray-700" : "border-l-gray-300"
                }`}
              ></div>
            </div>

            {/* Content */}
            <div
              className={`w-[80%] sm:w-[calc(50%-1rem)] ${
                index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
              }`}
            >
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.date}
              </p>
              <p className="text-sm">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
