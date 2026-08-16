"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-[#2e3a32]/10 px-6 py-14 lg:px-16 font-montserrat">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-2">
            <Link href="/" className="block">
              <span className="text-base text-[#2e3a32]" style={{ fontFamily: "'The Seasons', Georgia, serif" }}>
                Project_Astera
              </span>
            </Link>
            <p className="text-xs text-[#2e3a32]/55 leading-snug">
              Turning Sparks<br />Into Constellations
            </p>
          </div>

          {/* Library */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2e3a32]/50 mb-4">Library</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Browse resources", href: "/explore" },
                { label: "Browse by country", href: "/explore?focus=country" },
                { label: "Browse by subject", href: "/explore?focus=subject" },
                { label: "Events", href: "/events" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs text-[#2e3a32]/65 hover:text-[#2e3a32] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2e3a32]/50 mb-4">Get Involved</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Become a volunteer", href: "/volunteer-apply" },
                { label: "Partner with us", href: "/partner" },
                { label: "Start A Chapter", href: "/initiatives" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs text-[#2e3a32]/65 hover:text-[#2e3a32] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2e3a32]/50 mb-4">About</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our mission", href: "/about#mission" },
                { label: "Meet the team", href: "/about#team" },
                { label: "Contact us", href: "/contact" },
                { label: "Privacy policy", href: "/privacy" },
                { label: "Terms of use", href: "/terms" },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs text-[#2e3a32]/65 hover:text-[#2e3a32] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2e3a32]/50 mb-4">Connect With us</h4>
            {/* Social icons */}
            <div className="flex gap-3 mb-3">
              <a href="#" aria-label="Instagram" className="text-[#2e3a32]/70 hover:text-[#2e3a32] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="X" className="text-[#2e3a32]/70 hover:text-[#2e3a32] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Threads" className="text-[#2e3a32]/70 hover:text-[#2e3a32] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c0-3.516.847-6.366 2.492-8.471C5.845 1.215 8.593.024 12.168 0h.014c2.554.02 4.787.647 6.635 1.865 1.805 1.19 3.109 2.874 3.876 5.005l-2.857.638c-1.292-3.616-4.08-5.446-8.625-5.446-2.629.016-4.714.846-6.2 2.47-1.448 1.58-2.175 3.815-2.175 6.636v.068c0 2.822.727 5.062 2.175 6.639 1.481 1.622 3.56 2.451 6.183 2.466h.006c2.42-.015 4.315-.682 5.636-1.982 1.22-1.2 1.867-2.895 1.926-5.052-.777.24-1.62.364-2.526.36-4.04-.015-6.65-2.32-6.65-5.764 0-3.473 2.622-5.9 6.682-5.9 4.107 0 6.73 2.45 6.73 6.404 0 .168-.004.333-.01.498-.06 2.847-.968 5.012-2.702 6.435C19.85 23.155 16.7 24 12.186 24zm2.32-11.696c-.39 0-.77-.034-1.13-.099.023.694.128 1.282.325 1.743.33.774.91 1.175 1.726 1.18h.004c.728 0 1.26-.233 1.585-.693.347-.49.55-1.23.596-2.208a5.3 5.3 0 0 1-3.106.077z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-[#2e3a32]/70 hover:text-[#2e3a32] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#2e3a32]/55 mb-4">Asteranonprofit@gmail.com</p>
            <p className="text-xs font-semibold text-[#2e3a32] mb-2">Stay Updated With Our Latest Initiatives and stories.</p>
            <div className="flex gap-2 max-w-[220px]">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 rounded-full border border-[#2e3a32]/15 bg-white px-4 py-2 text-xs focus:outline-none focus:border-[#8fb08a] font-montserrat"
              />
              <button className="rounded-full bg-[#ffbedd] w-9 h-9 flex items-center justify-center hover:bg-[#f8a0c0] transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2e3a32]/8 pt-6 text-center">
          <p className="text-[11px] text-[#2e3a32]/40 font-montserrat">
            © {new Date().getFullYear()} Project Astera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
