"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const libraryLinks = [
    { label: "Browse resources", href: "/explore" },
    { label: "Browse by country", href: "/explore?focus=country" },
    { label: "Browse by subject", href: "/explore?focus=subject" },
    { label: "Events", href: "/events" },
  ];

  const involvedLinks = [
    { label: "Become a volunteer", href: "/volunteer-apply" },
    { label: "Partner with us", href: "/partner" },
    { label: "Start A Chapter", href: "/contact" },
  ];

  const aboutLinks = [
    { label: "Our mission", href: "/about#mission" },
    { label: "Meet the team", href: "/about#team" },
    { label: "Contact us", href: "/contact" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of use", href: "/terms" },
  ];

  return (
    <footer className="bg-[#faf2f5] px-6 py-16 font-body text-[#2e3a32] lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Link
            href="/"
            className="font-display text-4xl font-bold leading-none text-[#2e3a32]"
          >
            Project_Astera
          </Link>
          <p className="mt-8 max-w-[180px] font-display text-sm font-semibold leading-tight text-[#2e3a32]">
            Turning Sparks
            <br />
            Into Constellations
          </p>
        </div>

        <FooterColumn title="Library" links={libraryLinks} />
        <FooterColumn title="Get Involved" links={involvedLinks} />
        <FooterColumn title="About" links={aboutLinks} />

        <div>
          <h4 className="text-sm font-bold text-[#7f8c84]">
            Connect With us
          </h4>

          <div className="mt-8 flex items-center gap-5 text-[#111]">
            <Link href="#" aria-label="Instagram">
              <Instagram size={34} strokeWidth={2.2} />
            </Link>
            <Link href="#" aria-label="X / Twitter" className="text-4xl leading-none">
              X
            </Link>
            <Link href="#" aria-label="Threads" className="text-4xl leading-none">
              @
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube size={38} strokeWidth={2.1} />
            </Link>
          </div>

          <p className="mt-7 text-sm text-[#7f8c84]">
            Asteranonprofit@gmail.com
          </p>

          <p className="mt-10 max-w-xs font-display text-2xl font-bold leading-tight text-[#2e3a32]">
            Stay Updated With Our Latest
            <br />
            Initiatives and stories.
          </p>

          <form className="mt-6 flex max-w-xs items-center rounded-full bg-[#faf2f5] shadow-sm ring-1 ring-[#f8dde5]">
            <input
              type="email"
              placeholder="Your Email"
              className="min-w-0 flex-1 bg-transparent px-7 py-4 text-sm text-[#2e3a32] outline-none placeholder:text-[#8f9691]"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="mr-1 h-14 w-14 shrink-0 rounded-full bg-[#ffbedd] transition-transform hover:scale-105"
            />
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.35em] text-[#7f8c84]">
        {title}
      </h4>
      <ul className="mt-7 space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base text-[#7f8c84] transition-colors hover:text-[#2e3a32]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
