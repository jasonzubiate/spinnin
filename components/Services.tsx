import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import img1 from "@/public/img/demosdelivered.png";
import img2 from "@/public/img/developmentPhoto.png";

export default function Services() {
  return (
    <section id="services" className="pt-24 flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col px-4 md:px-6 gap-4 md:gap-8">
        <h3 className={`${GeistMono.className} text-sm uppercase`}>Services</h3>
        <p className="text-[3vw] md:text-[2vw] leading-tight uppercase md:w-3/5">
          We blend creativity with practical design to make your online presence
          unforgettable. Whether you're promoting a product, or showcasing your
          art, we create websites that leave a lasting impact.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="h-[250px] md:h-[400px] w-full relative">
            <Image
              src={img1}
              alt="desktop"
              className="object-cover object-center"
              fill
            />
          </div>
          <div className="px-4 md:px-6 pt-4 pb-16 flex flex-col gap-4 lg:border-r-[.5px] border-[#7f7f7f]">
            <label
              htmlFor="service-design"
              className="text-2xl md:text-3xl uppercase"
            >
              Design
            </label>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  UI UX Design
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Moible App Design
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Research & Discovery
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Competitive Analysis
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Website Design
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Motion Design
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Interaction Design
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Iconography
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Typography
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Design Systems
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Prototyping
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="h-[250px] md:h-[400px] w-full relative">
            <Image
              src={img2}
              alt="desktop"
              className="object-cover object-center"
              fill
            />
          </div>
          <div className="px-4 md:px-6 pt-4 pb-16 flex flex-col gap-4">
            <label
              htmlFor="service-design"
              className="text-2xl md:text-3xl uppercase"
            >
              Development
            </label>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  React Development
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Next.js Development
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Front-end Development
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  CMS Development
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Website Development
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Framer Website
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  Squarespace Website
                </p>
                <p
                  className={`${GeistMono.className} text-sm md:text-base text-[#7f7f7f]`}
                >
                  GSAP Animations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
