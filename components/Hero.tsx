"use client";

import Image from "next/image";

import { useState } from "react";

import star from "@/public/icons/minimalsStar.png";
import lightning from "@/public/icons/lightning.png";
import square from "@/public/icons/squareBricks.png";
import arrow from "@/public/icons/arrow.png";
import heart from "@/public/icons/heart.png";
import loader from "@/public/icons/loader.png";
import miniArrowWhite from "@/public/icons/miniArrowWhite.png";
import miniArrowBlack from "@/public/icons/miniArrowBlack.png";
import daffyGIF from "@/public/img/daffyGIF.webp";
import glove from "@/public/img/mickeyGlove.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactModal from "./ContactModal";
import $ from "jquery";

export default function Hero() {
	const [modal, setModal] = useState(false);

	// useGSAP(() => {
	//   let tl = gsap.timeline({
	//     repeat: -1,
	//     defaults: { duration: 0.5, delay: 1, ease: "expo.inOut" },
	//   });

	//   if (typeof window !== "undefined") {
	//     $(".marquee").each(function (index: number) {
	//       let track = $(this).find(".marquee_track");
	//       let items = $(this).find(".marquee_item");
	//       let tl = gsap.timeline({
	//         repeat: -1,
	//         defaults: { duration: 0.5, delay: 2, ease: "power2.inOut" },
	//       });

	//       items.each(function (index: number) {
	//         let distance = (index + 1) * -100;
	//         tl.to(track, { yPercent: distance });
	//       });

	//       items.first().clone().appendTo(track);
	//     });
	//   }
	// }, []);

	return (
		<section className="flex flex-col items-center justify-center gap-12 h-[100dvh]">
			{/* MOBILE */}
			<h1 className="flex lg:hidden flex-col items-center mt-16">
				<span className="h1-row-mobile">
					{/* <div className="w-[160px] h-[56px] relative">
            <Image src={arrow} alt="arrow icon" fill />
          </div> */}
					<div className="h1-icon big-spin">
						<Image src={star} alt="star icon" fill />
					</div>
					<span>Web</span>
					<div className="h1-icon rotate">
						<Image src={lightning} alt="lightning icon" fill />
					</div>
				</span>

				<span className="h1-row-mobile">
					<span>Development</span>
				</span>

				<span className="h1-row-mobile">
					<span>With A</span>
					<div className="h1-icon shake">
						<Image src={square} alt="sqare icon" fill />
					</div>
					<span>Beat </span>
				</span>

				<span className="h1-row-mobile">
					<span>Of Innovation</span>
				</span>

				<span className="h1-row-mobile">
					<span>To</span>
					<div className="w-[12.5vw] h-[9vw] relative">
						<Image
							src={daffyGIF}
							alt="daffy icon"
							className="rounded-sm"
							fill
							priority
						/>
					</div>
					<span>Scale</span>
				</span>

				<span className="h1-row-mobile">
					<div className="h1-icon heart-beat">
						<Image src={heart} alt="heart icon" fill />
					</div>
					<span>Your</span>
					<div className="h1-icon loading">
						<Image src={loader} alt="loader icon" fill />
					</div>
				</span>

				<span className="h1-row-mobile">
					<div className="h-[5dvh] w-[10vw] relative wave">
						<Image src={glove} alt="glove icon" fill />
					</div>
					<span className="marquee_item">Business.</span>
					{/* <span className="marquee overflow-hidden h-[6dvh]">
            <div className="marquee_track w-full h-full relative flex flex-col items-start">
              <span className="marquee_item">Shop.</span>
              <span className="marquee_item">Vision.</span>
              <span className="marquee_item">Image.</span>
            </div>
          </span> */}
				</span>
			</h1>

			{/* DESKTOP */}
			<h1 className="hidden md:flex flex-col items-center mt-8">
				<span className="h1-row-desktop">
					<span>Web</span>
					<div className="h1-icon big-spin">
						<Image src={star} alt="star icon" fill />
					</div>
					<span>Development</span>
					<div className="h1-icon rotate">
						<Image src={lightning} alt="lightning icon" fill />
					</div>
				</span>

				<span className="h1-row-desktop">
					<span>With A</span>
					<div className="h-[5vw] w-[5vw] relative wave">
						<Image src={glove} alt="glove icon" fill />
					</div>
					<div className="w-[10vw] h-[7vh] relative">
						<Image src={arrow} alt="arrow icon" fill />
					</div>
					<span>Beat </span>
					<span>Of</span>
					<div className="h1-icon shake">
						<Image src={square} alt="sqare icon" fill />
					</div>
				</span>

				<span className="h1-row-desktop">
					<span>Innovation</span>
					<div className="h1-icon loading">
						<Image src={loader} alt="loader icon" fill />
					</div>
					<span>To Scale</span>
					<div className="h1-icon heart-beat">
						<Image src={heart} alt="heart icon" fill />
					</div>
				</span>

				<span className="h1-row-desktop">
					<span>Your</span>
					<div className="w-[13vw] h-[5vw] relative">
						<Image
							src={daffyGIF}
							alt="daffy icon"
							className="rounded-sm"
							fill
							priority
						/>
					</div>
					<span className="marquee_item">Business.</span>
					{/* <span className="marquee overflow-hidden h-[7.5dvh] xl:h-[9dvh] 2xl:h-[10dvh] min-[1800px]:h-[12dvh] min-[2200px]:h-[15dvh]">
            <div className="marquee_track w-full h-full relative flex flex-col items-start">
              <span className="marquee_item">Shop.</span>
              <span className="marquee_item">Image.</span>
              <span className="marquee_item">Vision.</span>
            </div>
          </span> */}
				</span>
			</h1>

			<div className="flex flex-col items-center gap-6">
				<div className="flex flex-col items-center">
					<p className="uppercase leading-tight">
						We like to keep things spinnin,
					</p>
					<p className="uppercase leading-tight">Let us work with you</p>
				</div>
				<button
					id="hero-cta"
					onClick={() => setModal(true)}
					className="bg-trace-ash text-demo-smoke rounded-full mt-20 lg:mt-0 py-2 px-4 flex gap-2 items-center hover:bg-transparent hover:text-trace-ash transition-all duration-500 hover:border hover:border-trace-ash"
				>
					<Image
						id="hero-cta-icon-white"
						src={miniArrowWhite}
						alt="mini arrow"
					/>
					<Image
						id="hero-cta-icon-black"
						src={miniArrowBlack}
						className="hidden opacity-0"
						alt="mini arrow"
					/>
					<span>Hit Us Up</span>
				</button>
			</div>
			{modal ? <ContactModal toggleModal={setModal} /> : ""}
		</section>
	);
}
