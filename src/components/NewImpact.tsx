"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Active Volunteers", note: "Helping build and review resources" },
  { value: 50, suffix: "+", label: "Students Helped", note: "Learners supported" },
  { value: 20, suffix: "+", label: "Resources Shelved", note: "Quality study materials" },
  { value: 3, suffix: "+", label: "Branches", note: "Local chapters" },
];

function useCountUp(target: number, run: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0 as number;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return val;
}

function Stat({ value, suffix, label, note, run }: { value: number; suffix: string; label: string; note: string; run: boolean }) {
  const display = useCountUp(value, run);
  return (
    <div className="flex h-[245px] flex-col items-center justify-center border-r border-[#e7dfe1] px-4 text-center last:border-r-0">
      <div className="font-seasons text-[5.1rem] leading-none text-[#2e3a32]">{display}{suffix}</div>
      <div className="font-montserrat mt-7 text-[1.15rem] text-[#2e3a32]">{label}</div>
    </div>
  );
}

export default function NewImpact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRun(true);
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-10 overflow-visible bg-[#f8dce5] pb-24 pt-0" id="impact">
      <div className="relative mx-auto min-h-[500px] max-w-[1420px] bg-[#f8dce5] pt-20">
        <div ref={ref} className="relative z-10">
          <h2 className="font-seasons text-center text-[4rem] leading-none text-[#2e3a32]">Our Impact</h2>

          <div className="relative z-10 mx-auto mt-16 grid max-w-[1340px] grid-cols-2 bg-white lg:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} run={run} />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-[1340px] text-right font-montserrat text-[1rem] text-[#2e3a32]">Check out our events →</div>
        </div>
      </div>
    </section>
  );
}
