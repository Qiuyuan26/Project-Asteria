"use client";

import CountUp from "@/components/CountUp";

const stats = [
  { value: 500, suffix: "+", label: "Active Volunteers", note: "Helping build and review resources" },
  { value: 50, suffix: "+", label: "Students Helped", note: "Learners supported" },
  { value: 20, suffix: "+", label: "Resources Shelved", note: "Quality study materials" },
  { value: 3, suffix: "+", label: "Branches", note: "Local chapters" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="flex h-[245px] flex-col items-center justify-center border-r border-[#e7dfe1] px-4 text-center last:border-r-0">
      <div className="font-seasons text-[5.1rem] leading-none text-[#2e3a32]">
        <CountUp to={value} suffix={suffix} className="inline-block" />
      </div>
      <div className="font-montserrat mt-7 text-[1.15rem] text-[#2e3a32]">{label}</div>
    </div>
  );
}

export default function NewImpact() {
  return (
    <section className="relative z-10 overflow-visible bg-[#f8dce5] pb-16 pt-0" id="impact">
      <div className="relative mx-auto min-h-[500px] max-w-[1420px] bg-[#f8dce5] px-4 pt-14 sm:px-6 lg:px-0 lg:pt-20">
        <div className="relative z-10">
          <h2 className="font-seasons text-center text-[3rem] leading-none text-[#2e3a32] sm:text-[3.5rem] lg:text-[4rem]">Our Impact</h2>

          <div className="relative z-10 mx-auto mt-10 grid max-w-[1340px] grid-cols-1 bg-white sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-[1340px] text-right font-montserrat text-[1rem] text-[#2e3a32]">Check out our events →</div>
        </div>
      </div>
    </section>
  );
}
