"use client";

import { certificatesData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type CertificateProps = (typeof certificatesData)[number];

export default function Certificate({
  name,
  logo,
  image,
  url,
}: CertificateProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block bg-gray-100 border border-black/5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="flex items-center gap-4 p-4">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="object-contain"
        />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </motion.a>
  );
}
