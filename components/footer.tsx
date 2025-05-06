"use client";

import React, { useEffect, useState } from "react";

export default function Footer() {
  const [hostingProvider, setHostingProvider] = useState("Github");

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
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Xarlizard. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, {hostingProvider} hosting.
      </p>
    </footer>
  );
}
