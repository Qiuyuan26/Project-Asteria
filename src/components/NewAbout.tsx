"use client";

import Link from "next/link";

export default function NewAbout() {
  return (
    <section className="relative z-20 min-h-[1280px] overflow-hidden bg-[#f7f4ed] text-[#35443d] lg:h-[582px] lg:min-h-0 lg:overflow-visible">
      <img src="/stickers/Website%20Prototype%20(5).png" alt="" aria-hidden className="pointer-events-none absolute left-[13%] top-[4%] z-[1] w-[42vw] max-w-[250px] opacity-80 lg:left-[8%] lg:top-[5%] lg:w-[25vw] lg:max-w-[400px] lg:min-w-[260px]" />
      <img src="/stickers/Website%20Prototype%20(10).png" alt="" aria-hidden className="pointer-events-none absolute left-[-8%] top-[72%] z-[1] w-[56vw] max-w-[340px] rotate-[-12deg] opacity-45 lg:left-[7.5%] lg:top-[66%] lg:w-[26.5vw] lg:max-w-[420px] lg:min-w-[280px]" />

      <div className="relative z-10 mx-auto w-[82%] max-w-[540px] pt-[54%] lg:absolute lg:left-[36.4%] lg:top-[8.5%] lg:mx-0 lg:w-[33%] lg:max-w-[530px] lg:pt-0">
        <h2 className="font-seasons text-[3.35rem] leading-none text-[#26332d] sm:text-[4rem] lg:text-[3.35rem]">About Astera</h2>
        <p className="font-montserrat mt-5 text-[1.08rem] leading-[1.4] text-[#52605a] sm:text-[1.25rem] lg:text-[1.38rem] lg:leading-[1.28]">
          We are a youth-led international nonprofit organization committed to building a more equitable, inclusive, and compassionate world. Through education, advocacy, research, and cross-cultural collaboration, we create opportunities for young people to engage with global challenges, exchange ideas, and contribute meaningfully to the communities they are part of.
        </p>
        <Link href="/about" className="relative mt-8 inline-flex h-[60px] w-full max-w-[287px] items-center justify-center rounded-full bg-[#f7afd0] text-[1rem] text-[#26332d] lg:mt-10 lg:h-[66px] lg:text-[1.05rem]">
          <img src="/stickers/Copy%20of%20Website%20Prototype.png" alt="" aria-hidden className="absolute -left-5 -top-6 w-12" />
          Learn More About Us !!
        </Link>
      </div>

      <img src="/stickers/Website%20Prototype%20(6).png" alt="" aria-hidden className="pointer-events-none absolute left-[76%] top-[3%] z-[1] w-[18vw] max-w-[82px] min-w-[55px] lg:left-[75%] lg:top-[5%] lg:w-[7.2vw] lg:max-w-[115px] lg:min-w-[70px]" />
      <img src="/stickers/Website%20Prototype%20(7).png" alt="" aria-hidden className="pointer-events-none absolute left-[82%] top-[22%] z-[1] w-[17vw] max-w-[82px] min-w-[55px] rotate-[-12deg] lg:left-[84%] lg:top-[19%] lg:w-[6.5vw] lg:max-w-[105px] lg:min-w-[68px]" />
      <img src="/stickers/Website%20Prototype%20(3).png" alt="" aria-hidden className="pointer-events-none absolute left-[77%] top-[56%] z-[1] w-[17vw] max-w-[82px] min-w-[55px] rotate-[12deg] lg:left-[77%] lg:top-[42%] lg:w-[6.5vw] lg:max-w-[105px] lg:min-w-[70px]" />
      <img src="/stickers/Website%20Prototype%20(8).png" alt="" aria-hidden className="pointer-events-none absolute left-[80%] top-[82%] z-[1] w-[18vw] max-w-[88px] min-w-[58px] rotate-[15deg] lg:left-[82%] lg:top-[58%] lg:w-[7.2vw] lg:max-w-[115px] lg:min-w-[72px]" />
      <img src="/stickers/Website%20Prototype%20(9).png" alt="" aria-hidden className="pointer-events-none absolute left-[62%] top-[92%] z-[30] w-[34vw] max-w-[160px] min-w-[115px] opacity-90 lg:left-[75%] lg:top-[88%] lg:w-[18vw] lg:max-w-[285px] lg:min-w-[190px]" />
    </section>
  );
}
