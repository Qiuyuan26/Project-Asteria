import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="w-full bg-[#8fb08a] font-body">
      <div className="mx-auto grid min-h-[430px] w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-8 py-20 text-[#faf2f5] sm:px-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-20">
        <div className="min-w-0">
          <h2 className="max-w-[760px] font-display text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
            Be Part Of Something Bigger.
          </h2>

          <p className="mt-8 max-w-[700px] text-xl font-body font-medium leading-relaxed text-white sm:text-2xl">
            Together, we can turn more sparks into constellations.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
          <Link href="/volunteer-apply" className="inline-flex min-h-[76px] min-w-[250px] items-center justify-center rounded-full bg-[#ffbedd] px-10 py-5 text-center text-xl font-bold text-black transition-transform hover:scale-105">
            Join Astera
          </Link>

          <Link href="/partner" className="inline-flex min-h-[76px] min-w-[250px] items-center justify-center rounded-full bg-white px-10 py-5 text-center text-xl font-bold text-black transition-transform hover:scale-105">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}