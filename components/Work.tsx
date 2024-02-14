"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { projects } from "@/data";
import { GeistMono } from "geist/font/mono";

type Project = {
  name: string;
  categories: string[];
  year: number;
  site: string;
  background: string;
  video: string;
};

export default function Work() {
  const textRef = useRef(null);
  const [projectIndex, setProjectIndex] = useState(0);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom%",
        end: "top top",
      },
      yPercent: 100,
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProjectIndex((prevIndex) => {
        if (prevIndex === projects.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, [projectIndex]);

  const project = projects[projectIndex];

  return (
    <section
      id="work"
      className="h-screen relative overflow-hidden p-4 md:p-6 flex flex-col justify-between"
    >
      <Image
        src={project.background}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="mask z-10 relative">
        <h3
          ref={textRef}
          className={`${GeistMono.className} text-sm uppercase text-demo-smoke`}
        >
          Latest Projects
        </h3>
      </div>
      <div className="z-10 relative">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div
              className={`${GeistMono.className} uppercase w-full flex justify-between text-demo-smoke`}
            >
              <div className="flex gap-60">
                <p>{project.name}</p>
                <p>{project.categories.join(", ")}</p>
              </div>
              <div className="flex gap-16">
                <a href={`https://${project.site}`} target="_blank">
                  {project.site}
                </a>
                <p>[{project.year}]</p>
              </div>
            </div>
            <div className="border border-demo-smoke w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
