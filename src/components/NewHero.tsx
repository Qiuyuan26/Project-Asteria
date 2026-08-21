"use client";

import Link from "next/link";

export default function NewHero() {
  return (
    <section className="relative min-h-[980px] overflow-hidden bg-[#b7cbaa] text-[#202a27] sm:min-h-[900px] lg:h-screen lg:min-h-[700px]">
      <img src="/stickers/darkgreenshape.png" alt="" aria-hidden className="pointer-events-none absolute right-0 top-0 z-0 w-[13.5%] min-w-[150px]" />
      <div className="relative z-10 mx-auto flex min-h-[980px] max-w-[982px] flex-col items-start justify-start px-6 pb-24 pt-36 sm:min-h-[900px] sm:pt-32 lg:h-screen lg:min-h-[700px] lg:flex-row lg:items-center lg:justify-center lg:px-0 lg:pb-0 lg:pt-0">
        <div className="relative mt-0 w-full lg:-translate-x-20 lg:mt-8 lg:w-[64%]">
          <img src="/stickers/mp4.png" alt="" aria-hidden className="pointer-events-none absolute -left-8 top-0 z-0 w-[145px]" />
          <h1 className="relative z-10 max-w-[680px] font-seasons text-[2.65rem] leading-[1.04] text-[#202a27] sm:text-[4.35rem] lg:text-[5.2rem]">
            <span className="block lg:whitespace-nowrap">Turning Sparks</span>
            <span className="block lg:whitespace-nowrap">Into Constellations</span>
          </h1>

          <p className="font-montserrat mt-6 max-w-[530px] text-[0.98rem] leading-[1.4] text-[#202a27] sm:text-[1.35rem] lg:mt-7">
            Astera empowers young people to create meaningful change through
            education, advocacy, research, and community-driven initiatives.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:gap-6 lg:mt-10 lg:gap-11">
            <Link
              href="/explore"
              className="relative inline-flex h-[58px] w-full max-w-none items-center justify-center rounded-full bg-[#f7afd0] text-[0.98rem] text-[#202a27] sm:max-w-[285px] sm:h-[67px] sm:text-[1.08rem]"
            >
              <img src="/stickers/Copy%20of%20Website%20Prototype.png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
              Join Our Community →
            </Link>

            <Link
              href="/volunteer-apply"
              className="relative inline-flex h-[58px] w-full max-w-none items-center justify-center rounded-full bg-[#fbf7f8] text-[0.98rem] text-[#202a27] sm:max-w-[285px] sm:h-[67px] sm:text-[1.08rem]"
            >
              <img src="/stickers/Copy%20of%20Website%20Prototype%20(2).png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
              Explore Our Impact →
            </Link>
          </div>
        </div>

        <img src="/stickers/Website%20Prototype.png" alt="" aria-hidden className="pointer-events-none relative mt-16 w-[270px] self-center sm:mt-12 lg:absolute lg:left-[75%] lg:top-[11%] lg:mt-0 lg:w-[500px] lg:max-w-[44vw]" />
      </div>

      <img src="/stickers/Website%20Prototype%20(4).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-10px] left-[-22px] z-[3] w-[150px] sm:w-[178px]" />
      <img src="/stickers/Website%20Prototype%20(3).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-15px] left-[70px] z-[4] w-[110px] sm:left-[90px] sm:w-[130px]" />
      <img src="/stickers/Website%20Prototype%20(2).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-13px] left-[145px] z-[5] w-[92px] sm:left-[185px] sm:w-[108px]" />
      <img src="/stickers/Website%20Prototype%20(1).png" alt="" aria-hidden className="pointer-events-none absolute bottom-[-8px] left-[185px] z-[6] w-[130px] sm:left-[230px] sm:w-[158px]" />

    </section>
  );
}
