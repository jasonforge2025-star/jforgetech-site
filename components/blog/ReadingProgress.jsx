"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;
      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold via-[#f5d67b] to-gold shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}