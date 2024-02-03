"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      const percentage = Math.round((scrollY / documentHeight) * 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-between items-center w-full p-4 fixed top-0">
      <Link href={"/"} className="uppercase text-s lg:text-base">
        Spinnin
      </Link>
      {/* <p className="uppercase geist hidden md:flex">
        (SCROLL {scrollPercentage}%)
      </p> */}
      <a
        className="uppercase text-s lg:text-base"
        href="https://www.instagram.com/spinnin.studio/"
        target="_blank"
      >
        Instagram
      </a>
    </header>
  );
}