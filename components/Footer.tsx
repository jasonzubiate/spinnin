"use client";

import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import gif from "@/public/img/recordGIF.gif";
import { emailRedirect } from "@/utils";

export default function Footer() {
  return (
    <footer className="bg-trace-ash text-demo-smoke h-[50dvh] p-4 pb-16 flex flex-col justify-between">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-8">
            <a
              className={`${GeistMono.className} link-small font-light cursor-pointer`}
              onClick={emailRedirect}
            >
              <span>hey.spinnin@gmail.com</span>
            </a>
            <div className="flex gap-2">
              <a
                className={`${GeistMono.className} link-small font-light`}
                href="https://instagram.com/spinnin.studio"
                target="_blank"
              >
                <span className="link-bracket">{"["}</span>
                <span>Instagram</span>
                <span className="link-bracket">{"]"}</span>
              </a>
              <a
                className={`${GeistMono.className} link-small font-light`}
                href="https://www.linkedin.com/company/spinninstudio/"
                target="_blank"
              >
                <span className="link-bracket">{"["}</span>
                <span>LinkedIn</span>
                <span className="link-bracket">{"]"}</span>
              </a>
            </div>
          </div>
          <a
            href="https://jasonzubiate.com"
            className={`${GeistMono.className} uppercase text-sm text-[#7f7f7f] flex md:hidden`}
          >
            Dev by Jason Zubiate
          </a>
        </div>
        <a
          href="https://jasonzubiate.com"
          className={`${GeistMono.className} uppercase text-sm text-[#7f7f7f] hidden md:flex`}
        >
          Dev by Jason Zubiate
        </a>
      </div>
      <div className="w-[200px] h-[120px] relative self-end">
        <Image src={gif} alt="record" fill />
      </div>
    </footer>
  );
}
