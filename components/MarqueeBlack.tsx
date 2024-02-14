"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MarqueeWhite() {
  const slider1Text1 = useRef(null);
  const slider1Text2 = useRef(null);
  const slider1 = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(slider1Text1.current, { xPercent: xPercent });
    gsap.set(slider1Text2.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.05 * direction;
  };

  return (
    <div className="relative">
      <div className="slider-container">
        <div ref={slider1} className="slider border-y-2 p border-trace-ash">
          <h3 ref={slider1Text1} className="flex gap-2 items-center  ">
            <span className="uppercase text-[6.5vw] leading-[80%] text-nowrap ">
              Creative Approach -
            </span>
            <span className="uppercase text-[6.5vw] leading-[80%] text-nowrap">
              Creative Approach -
            </span>
          </h3>
          <h3 ref={slider1Text2} className="flex gap-2 items-center  ">
            <span className="uppercase text-[6.5vw] leading-[80%] text-nowrap ">
              Creative Approach -
            </span>
            <span className="uppercase text-[6.5vw] leading-[80%] text-nowrap">
              Creative Approach -
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
