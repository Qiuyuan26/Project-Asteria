"use client";

import Link from "next/link";

export default function NewHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#b7cbaa] text-[#202a27] lg:h-screen lg:min-h-[700px]">
      <img src="/stickers/darkgreenshape.png" alt="" aria-hidden className="pointer-events-none absolute right-0 top-0 z-0 w-[13.5%] min-w-[150px]" />
      <video autoPlay loop muted playsInline className="pointer-events-none absolute left-[14.2%] top-[18%] z-[1] w-[14.5vw] max-w-[230px] min-w-[145px] mix-blend-screen brightness-[0.72] saturate-[1.8]">
        <source src="/stickers/hero/hero-collage.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[982px] items-center lg:h-screen lg:min-h-[700px]">
        <div className="relative mt-8 w-[70%]">
          <h1 className="font-seasons text-[4.35rem] leading-[1.02] text-[#202a27] lg:text-[5.2rem]">
            <span className="block whitespace-nowrap">Turning Sparks</span>
            <span className="block whitespace-nowrap">Into Constellations</span>
          </h1>

          <p className="font-montserrat mt-7 max-w-[530px] text-[1.35rem] leading-[1.28] text-[#202a27]">
            Astera empowers young people to create meaningful change through
            education, advocacy, research, and community-driven initiatives.
          </p>

          <div className="mt-10 flex gap-11">
            <Link
              href="/explore"
              className="relative inline-flex h-[67px] w-[285px] items-center justify-center rounded-full bg-[#f7afd0] text-[1.08rem] text-[#202a27]"
            >
              <img src="/stickers/Copy%20of%20Website%20Prototype.png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
              Join Our Community →
            </Link>

            <Link
              href="/volunteer-apply"
              className="relative inline-flex h-[67px] w-[285px] items-center justify-center rounded-full bg-[#fbf7f8] text-[1.08rem] text-[#202a27]"
            >
              <img src="/stickers/Copy%20of%20Website%20Prototype%20(2).png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
              Explore Our Impact →
            </Link>
          </div>
        </div>

        <img src="/stickers/Website%20Prototype.png" alt="" aria-hidden className="pointer-events-none absolute left-[68%] top-[20%] z-[2] w-[500px] max-w-[48vw]" />
      </div>

      <img src="/stickers/Website%20Prototype%20(4).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-10px] left-[-22px] z-[3] w-[178px]" />
      <img src="/stickers/Website%20Prototype%20(3).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-15px] left-[90px] z-[4] w-[130px]" />
      <img src="/stickers/Website%20Prototype%20(2).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-13px] left-[185px] z-[5] w-[108px]" />
      <img src="/stickers/Website%20Prototype%20(1).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-8px] left-[230px] z-[6] w-[158px]" />

    </section>
  );
}
