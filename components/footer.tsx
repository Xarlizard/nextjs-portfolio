"use client";

import React, { useEffect, useState } from "react";
import { hostingProviders } from "@/lib/data"; // Import the hostingProviders array

export default function Footer() {
  const [hostingProvider, setHostingProvider] = useState("Github");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;

    if (
      hostname.includes("charlie.icu") ||
      hostname.includes("pages.dev") ||
      hostname.includes("workers.dev")
    ) {
      setHostingProvider("Cloudflare");
    } else if (hostname.includes("netlify.app")) {
      setHostingProvider("Netlify");
    } else if (hostname.includes("vercel.app")) {
      setHostingProvider("Vercel");
    } else {
      setHostingProvider("Github");
    }
  }, []);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 relative">
      <small className="mb-2 block text-xs">
        &copy; 2025 Xarlizard. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend,{" "}
        <span
          className="font-semibold text-blue-500 cursor-pointer relative"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {hostingProvider}
        </span>{" "}
        hosting.
      </p>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            {hostingProviders.map((provider) => (
              <li key={provider.name} className="px-4 py-2 hover:bg-gray-100">
                <a
                  href={provider.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-700">{provider.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
}
