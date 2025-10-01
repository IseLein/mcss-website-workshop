"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const titles = [
    "Software Engineer",
    "Computer Science Student",
    "Basketball & Cricket Enjoyer",
    "Serial Moonlighter",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentTitle) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        // Continue deleting
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        // Continue typing
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="h-[75vh] flex flex-col items-center justify-center px-8 py-20">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-dark-brown mb-8 text-center">
        Soham Parekh
      </h1>
      <div className="h-12 flex items-center">
        <p className="text-2xl sm:text-3xl md:text-4xl text-forest-green font-medium">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
}
