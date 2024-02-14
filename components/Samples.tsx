"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "@/hooks/useDiamensions";

const images = [
  "sample1.png",
  "sample2.png",
  "sample3.png",
  "sample4.png",
  "sample5.png",
  "sample6.png",
  "sample7.png",
];

export default function Samples() {
  const galleryRef = useRef(null);
  const { width, height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <section id="samples">
      
      <div
        ref={galleryRef}
        className="h-[175vh] bg-trace-ash flex flex-row gap-[2vw] p-4 box-border overflow-hidden"
      >
        <Column images={[images[5], images[2], images[2]]} y={y} />
        <Column images={[images[3], images[1], images[0]]} y={y2} />
        {width > 640 && (
          <>
            <Column images={[images[6], images[0], images[4]]} y={y3} />
            <Column images={[images[2], images[3], images[4]]} y={y4} />
          </>
        )}
      </div>
    </section>
  );
}

function Column({ images, y = 0 }: any) {
  return (
    <motion.div
      style={{ y }}
      className="gallery-column h-full flex flex-col gap-[2vw] w-1/2 sm:min-w-[250px] relative"
    >
      {images.map((src: string, index: number) => {
        return (
          <a
            href="https://instagram.com/spinnin.studio"
            target="_blank"
            key={index}
            className="w-full h-full rounded-[1vw] overflow-hidden relative"
          >
            <Image
              src={`/img/${src}`}
              alt={src}
              fill
              className="object-cover object-top"
            />
          </a>
        );
      })}
    </motion.div>
  );
}
