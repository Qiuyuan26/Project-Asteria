"use client";

import Link from "next/link";

export default function NewAbout() {
  return (
    <section className="relative z-20 h-[582px] overflow-visible bg-[#f7f4ed] text-[#35443d]">
      <img src="/stickers/Website%20Prototype%20(5).png" alt="" aria-hidden className="pointer-events-none absolute left-[8%] top-[5%] z-[1] w-[25vw] max-w-[400px] min-w-[260px] opacity-80" />
      <img src="/stickers/Website%20Prototype%20(10).png" alt="" aria-hidden className="pointer-events-none absolute left-[7.5%] top-[66%] z-[30] w-[26.5vw] max-w-[420px] min-w-[280px] rotate-[-12deg] opacity-45" />

      <div className="absolute left-[36.4%] top-[8.5%] z-10 w-[33%] max-w-[530px]">
        <h2 className="font-seasons text-[3.35rem] leading-none text-[#26332d]">About Astera</h2>
        <p className="font-montserrat mt-5 text-[1.38rem] leading-[1.28] text-[#52605a]">
          We are a youth-led international nonprofit organization committed to building a more equitable, inclusive, and compassionate world. Through education, advocacy, research, and cross-cultural collaboration, we create opportunities for young people to engage with global challenges, exchange ideas, and contribute meaningfully to the communities they are part of.
        </p>
        <Link href="/about" className="relative mt-10 inline-flex h-[66px] w-[287px] items-center justify-center rounded-full bg-[#f7afd0] text-[1.05rem] text-[#26332d]">
          <img src="/stickers/Copy%20of%20Website%20Prototype.png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
          Learn More About Us !!
        </Link>
      </div>

      <img src="/stickers/Website%20Prototype%20(6).png" alt="" aria-hidden className="pointer-events-none absolute left-[75%] top-[5%] z-[1] w-[7.2vw] max-w-[115px] min-w-[70px]" />
      <img src="/stickers/Website%20Prototype%20(7).png" alt="" aria-hidden className="pointer-events-none absolute left-[84%] top-[19%] z-[1] w-[6.5vw] max-w-[105px] min-w-[68px] rotate-[-12deg]" />
      <img src="/stickers/Website%20Prototype%20(3).png" alt="" aria-hidden className="pointer-events-none absolute left-[77%] top-[42%] z-[1] w-[6.5vw] max-w-[105px] min-w-[70px] rotate-[12deg]" />
      <img src="/stickers/Website%20Prototype%20(8).png" alt="" aria-hidden className="pointer-events-none absolute left-[82%] top-[58%] z-[1] w-[7.2vw] max-w-[115px] min-w-[72px] rotate-[15deg]" />
      <img src="/stickers/Website%20Prototype%20(9).png" alt="" aria-hidden className="pointer-events-none absolute left-[75%] top-[88%] z-[30] w-[18vw] max-w-[285px] min-w-[190px] opacity-90" />
    </section>
  );
}
