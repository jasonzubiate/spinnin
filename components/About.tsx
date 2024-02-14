"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import gif from "@/public/img/djangoGIF.gif";
import start from "@/public/icons/minimalsStar.png";
import { GeistMono } from "geist/font/mono";

export default function About() {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const aboutRef3 = useRef(null);
  const aboutRef4 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
      },
    });
    tl.from(aboutRef1.current, {
      y: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    });
    tl.from(
      aboutRef2.current,
      {
        y: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<.1"
    );
    tl.from(
      aboutRef3.current,
      {
        y: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<.1"
    );

    gsap.from(aboutRef4.current, {
      scrollTrigger: {
        trigger: aboutRef4.current,
        start: "top 80%",
      },
      duration: 0.7,
      opacity: 0,
    });
  });

  return (
    <section
      id="about"
      className="px-4 py-16 md:py-20 md:px-6 relative flex flex-col gap-12 md:gap-28"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <h3 className={`${GeistMono.className} text-sm uppercase`}>About</h3>
        <div className="flex w-full justify-between items-center">
          <h2 className="flex flex-col">
            <div className="mask">
              <span ref={aboutRef1} className="flex items-center">
                A Few M
                <span className="relative w-[24px] h-[24px] sm:w-[40px] sm:h-[40px] md:w-[3.7vw] md:h-[3.7vw] big-spin ">
                  <Image src={start} alt="O" aria-hidden fill />
                </span>
                FOS
              </span>
            </div>
            <div className="mask">
              <span ref={aboutRef2} className="flex">
                Crafting Dynamic
              </span>
            </div>
            <div className="mask">
              <span ref={aboutRef3} className="flex">
                Digital Experiences
              </span>
            </div>
          </h2>
          <div className="w-[200px] h-[130px] md:w-[27vw] md:h-[220px] relative hidden md:flex">
            <Image src={gif} alt="Django GIF" fill />
          </div>
        </div>
      </div>

      <p
        ref={aboutRef4}
        className="md:w-[60%] uppercase text-[4vw] md:text-[2.5vw] leading-tight"
      >
        Spinnin is a Los Angeles born web design and devlopment agency. We
        specialize in creating modern websites for fun industries.
      </p>

      <div className="w-[250px] h-[150px] relative md:hidden ml-auto">
        <Image src={gif} alt="Django GIF" fill />
      </div>
    </section>
  );
}
