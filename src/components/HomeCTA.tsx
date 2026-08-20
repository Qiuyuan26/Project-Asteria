import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="w-full bg-[#8fb08a] font-body">
      <div className="flex min-h-[430px] w-full flex-col gap-10 px-8 py-20 text-[#faf2f5] sm:px-14 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:px-24">
        <div className="min-w-0">
          <h2 className="max-w-full whitespace-normal font-display text-5xl font-bold leading-none sm:text-6xl lg:text-7xl 2xl:whitespace-nowrap">
            Be Part Of Something Bigger.
          </h2>

          <p className="mt-12 text-2xl font-body font-medium leading-relaxed text-white">
            Together, we can turn more sparks into constellations.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row 2xl:shrink-0">
          <Link href="/volunteer-apply" className="rounded-full bg-[#ffbedd] px-16 py-6 text-center text-xl font-bold text-black transition-transform hover:scale-105">
            Join Astera
          </Link>

          <Link href="/partner" className="rounded-full bg-white px-16 py-6 text-center text-xl font-bold text-black transition-transform hover:scale-105">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}