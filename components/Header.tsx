"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";

export default function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
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
    <header id="header">
      <Link
        href={"/"}
        className="fixed m-4 md:m-6 uppercase text-sm z-50 text-demo-smoke mix-blend-difference"
      >
        Spinnin
      </Link>
      <p
        className={`${GeistMono.className} uppercase hidden md:flex text-sm fixed mt-6 left-1/2 -translate-x-1/2 z-50 text-demo-smoke mix-blend-difference font-light`}
      >
        (SCROLL {scrollPercentage}%)
      </p>
      <a
        className={`${GeistMono.className} link-small fixed right-0 m-4 md:mt-6 mix-blend-difference font-light z-50 text-demo-smoke`}
        href="https://www.instagram.com/spinnin.studio/"
        target="_blank"
      >
        <span className="link-bracket">{"["}</span>
        <span>Instagram</span>
        <span className="link-bracket">{"]"}</span>
      </a>
    </header>
  );
}
