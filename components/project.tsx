"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block bg-gray-100 border border-black/5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
