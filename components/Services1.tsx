"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { GeistMono } from "geist/font/mono";

const icons = ["squares.png", "twine.png", "heart.png"];

export default function Services1() {
  return (
    <section id="services" className="h-[100dvh] flex flex-col justify-between">
      <div className="p-16 flex flex-col gap-3">
        <h3 className="text-lg uppercase font-medium">Service</h3>
        <div className="flex justify-between w-full pr-16">
          <div className="flex flex-col gap-2">
            <h4 className="text-5xl uppercase font-medium">Development</h4>
            <p className="w-[475px]">
              Coding is the backbone of your digital presence, and we do it
              right. With modern tools such as React and Next.js, we craft code
              that&apos;s effective, maintainable, and robust. Whether it&apos;s
              a responsive website or as complex platform, our development
              ensures smooth performance tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg uppercase font-medium">Key Step</p>
            <label htmlFor="key-step" className="text-[300px]  leading-[80%]">
              03
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex gap-16 p-16">
          {icons.map((icon, index) => (
            <div key={index} className="relative w-[64px] h-[64px]">
              <Image src={`/icons/${icon}`} alt="icon" fill />
            </div>
          ))}
        </div>
        <div
          className={`${GeistMono.className} w-[70%] bg-trace-ash text-demo-smoke p-8 flex flex-col gap-8`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="uppercase text-xl font-light">
                Source: its_the_westend(selected work)
              </p>
              <p className="uppercase font-light">1 output displayed</p>
            </div>
            <div className="w-full rounded-full bg-demo-smoke h-[24px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-light">Output preview</p>
            <div className="flex w-full justify-between items-end">
              <div className="flex gap-4">
                <video
                  src="/video/westendVideo.mov"
                  autoPlay
                  muted
                  loop
                  className="w-[300px]"
                ></video>
                <div className="flex gap-4">
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col  items-end">
                      <p className="text-sm font-light">Project Name:</p>
                      <p className="text-sm font-light">Path:</p>
                      <p className="text-sm font-light">Website:</p>
                      <p className="text-sm font-light">Frameworks:</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm font-light">ID:</p>
                      <p className="text-sm font-light">Viewport:</p>
                      <p className="text-sm font-light">Status:</p>
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-light uppercase">
                        its_the_westend(selected work)
                      </p>
                      <p className="text-sm font-light">
                        /itsthewestend/components/Pages/Sets.tsx
                      </p>
                      <p className="text-sm font-light">
                        https://www.itsthewestend.com
                      </p>
                      <p className="text-sm font-light">
                        React, Next.js, Prismic
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-sm font-light">#sets</p>
                      <p className="text-sm font-light">Desktop</p>
                      <p className="text-sm font-light">Ready</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[24px] h-[24px]">
                <Image src={"/icons/logoWhite.png"} alt="spinnin" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
