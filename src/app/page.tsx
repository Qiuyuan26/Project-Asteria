"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedShelf from "@/components/FeaturedShelf";
import StickerLayer from "@/components/StickerLayer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import stickerConfig from "../../public/sticker-config.json";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════
          HERO
          - bg: #bacdaf (sage green)
          - blob: darker green shape top-right corner
          - LEFT: pink donut sticker (s1) overlapping behind heading
                  big heading "Turning Sparks / Into Constellations"
                  subtitle paragraph
                  2 pill buttons: pink bg + white bg, each with tiny bow (s2) top-left
          - RIGHT: tulip illustration (s0) centered
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#bacdaf" }}
      >
        {/* Blob — darker organic shape top-right */}
        <div
          className="absolute top-0 right-0 w-48 h-56 pointer-events-none"
          style={{
            backgroundColor: "#8fb08a",
            borderRadius: "0 0 0 80%",
            opacity: 0.6,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-16 py-14 grid lg:grid-cols-2 gap-10 items-center min-h-[480px]">

          {/* LEFT */}
          <div className="relative">
            {/* Pink donut sticker — from config */}
            <div
              className="absolute pointer-events-none select-none z-0"
              style={{ top: stickerConfig.hero[0].top, left: stickerConfig.hero[0].left, width: stickerConfig.hero[0].width, height: stickerConfig.hero[0].width }}
            >
              <Image src={`/stickers/${stickerConfig.hero[0].id}.png`} alt="" fill style={{ objectFit: "contain" }} priority />
            </div>

            <h1
              className="relative z-10 leading-[1.08] text-[#2e3a32]"
              style={{
                fontFamily: "'The Seasons', Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
              }}
            >
              Turning Sparks<br />
              Into Constellations
            </h1>

            <p
              className="mt-5 text-sm leading-relaxed text-[#2e3a32]/75 max-w-[360px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Astera empowers young people to create meaningful change through
              education, advocacy, research, and community-driven initiatives.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Button 1 — pink bg */}
              <Link
                href="/about"
                className="relative inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-[#2e3a32] transition-colors hover:opacity-90"
                style={{ backgroundColor: "#f8dde5", fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Bow sticker top-left of button */}
                <span className="absolute -top-3.5 left-1 w-6 h-6 pointer-events-none select-none">
                  <Image src="/stickers/s2.png" alt="" fill style={{ objectFit: "contain" }} />
                </span>
                Join Our Community →
              </Link>

              {/* Button 2 — white bg */}
              <Link
                href="/explore"
                className="relative inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-[#2e3a32] transition-colors hover:opacity-90"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="absolute -top-3.5 left-1 w-6 h-6 pointer-events-none select-none">
                  <Image src="/stickers/s2.png" alt="" fill style={{ objectFit: "contain" }} />
                </span>
                Explore Our Impact →
              </Link>
            </div>
          </div>

          {/* RIGHT — tulip illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]">
              <Image
                src="/stickers/s0.png"
                alt="Tulip illustration"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ABOUT ASTERA
          - bg: #faf2f5 (very pale pink/cream)
          - Layout: stickers scattered around centered text
          - LEFT stickers (from top to bottom):
              s5 (bunny) — large, left side mid-height
              s16 (candy/wrap) — bottom-left
          - RIGHT stickers (from top to bottom):
              s10 (peach/fruit) — top right
              s7 (milk bottle) — right, slightly below peach
              s8 (strawberry) — right middle
              s4 (perfume bottle) — right lower
              s9 (pink kiwi flower) — bottom right, large
          - CENTER: heading + paragraph + pink pill button with bow
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 px-6 lg:px-16"
        style={{ backgroundColor: "#faf2f5" }}
      >
        <StickerLayer stickers={stickerConfig.about} />

        {/* CENTER text */}
        <div className="relative mx-auto max-w-lg text-center z-10">
          <h2
            className="text-[#2e3a32]"
            style={{
              fontFamily: "'The Seasons', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            }}
          >
            About Astera
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#2e3a32]/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            We are a youth-led international nonprofit organization committed to
            building a more equitable, inclusive, and compassionate world. Through
            education, advocacy, research, and cross-cultural collaboration, we
            create opportunities for young people to engage with global challenges,
            exchange ideas, and contribute meaningfully to the communities they are
            part of.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="relative inline-flex items-center rounded-full px-8 py-3 text-sm font-medium text-[#2e3a32] transition-colors hover:opacity-90"
              style={{ backgroundColor: "#f8dde5", fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="absolute -top-3.5 left-2 w-6 h-6 pointer-events-none select-none">
                <Image src="/stickers/s2.png" alt="" fill style={{ objectFit: "contain" }} />
              </span>
              Learn More About us !!
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR IMPACT
          - Top band: #f8dde5 pink, "Our Impact" heading centered
          - Bottom: white bg, 4 large numbers in a row
            500+ Active Volunteers | 50+ Students Helped |
            20+ Resources Shelved  | 3+ Branches
          - Numbers use The Seasons light weight, very large
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f8dde5" }} className="pt-14 pb-4 px-6 lg:px-16 text-center">
        <h2
          className="text-[#2e3a32]"
          style={{
            fontFamily: "'The Seasons', Georgia, serif",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
          }}
        >
          Our Impact
        </h2>
      </section>

      <section className="bg-white px-6 py-12 lg:px-16">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: "500", label: "Active Volunteers" },
            { num: "50",  label: "Students Helped" },
            { num: "20",  label: "Resources Shelved" },
            { num: "3",   label: "Branches" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-[#2e3a32]"
                style={{
                  fontFamily: "'The Seasons', Georgia, serif",
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                {s.num}<span style={{ fontSize: "0.55em" }}>+</span>
              </p>
              <p className="mt-2 text-xs text-[#6B7280] tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EDUCATION WITHOUT BORDERS
          - bg: #f8dde5 (light pink)
          - "Check out our events →" — right aligned, above section
          - "WHO ARE WE" tiny label
          - Large heading left
          - LEFT col: 2 paragraphs, then 2 buttons: green pill "Our Story" + outline "Meet The Team"
          - RIGHT col: 2×2 grid of rounded capsule cards
              Top-left:  green #bacdaf  "Free Forever"
              Top-right: pink  #ffbedd  "Voulenteer build"
              Bot-left:  pink  #ffbedd  "Curriculum Alligned"
              Bot-right: green #bacdaf  "Always Growing"
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f8dde5" }} className="px-6 py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex justify-end mb-2">
            <Link href="/events" className="text-xs text-[#2e3a32]/55 hover:text-[#2e3a32] transition-colors inline-flex items-center gap-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Check out our events <ArrowRight size={11} />
            </Link>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2e3a32]/50 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            WHO ARE WE
          </p>

          <h2
            className="text-[#2e3a32] mb-8"
            style={{
              fontFamily: "'The Seasons', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Education Without Borders.
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#2e3a32]/75 max-w-[360px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Project Astera is a volunteer-led nonprofit on a mission to make
                high-quality study materials free and accessible to every student —
                regardless of where they live or what they can afford.
              </p>
              <p className="text-sm leading-relaxed text-[#2e3a32]/75 max-w-[360px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                We do this by building an open library of notes, worksheets, and past
                papers, filed by country, curriculum, grade, and subject — so finding
                exactly what you need takes seconds, not hours.
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  href="/about#mission"
                  className="rounded-full px-5 py-2 text-xs font-semibold text-[#2e3a32] hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#bacdaf", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Our Story
                </Link>
                <Link
                  href="/about#team"
                  className="rounded-full px-5 py-2 text-xs font-semibold text-[#2e3a32] border border-[#2e3a32]/25 hover:border-[#2e3a32]/60 transition-colors bg-transparent"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Meet The Team
                </Link>
              </div>
            </div>

            {/* Right — 2×2 feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Free Forever",        desc: "No paywalls, no sign-up required to browse.",                  bg: "#bacdaf" },
                { label: "Voulenteer build",     desc: "Every resource is submitted and verified by our global team.", bg: "#ffbedd" },
                { label: "Curriculum Alligned",  desc: "Organized by country, syllabus, grade, and chapter.",          bg: "#ffbedd" },
                { label: "Always Growing",       desc: "New notes added every week by volunteers worldwide.",           bg: "#bacdaf" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] px-5 py-5 space-y-2"
                  style={{ backgroundColor: item.bg }}
                >
                  <h4 className="text-sm font-semibold text-[#2e3a32]" style={{ fontFamily: "'The Seasons', Georgia, serif" }}>
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-[#2e3a32]/65 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FROM THE SHELVES
          - bg: #f5f0e8 (warm off-white/cream)
          - "FROM THE SHELVES" tiny label top-left
          - "Recently added & popular" heading left | "Browse All Resources+" right
          - Notebook cards below
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f5f0e8" }} className="px-6 py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2e3a32]/45 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                FROM THE SHELVES
              </p>
              <h2
                className="text-[#2e3a32]"
                style={{
                  fontFamily: "'The Seasons', Georgia, serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                }}
              >
                Recently added &amp; popular
              </h2>
            </div>
            <Link
              href="/explore"
              className="text-sm font-semibold text-[#2e3a32] hover:opacity-60 transition-opacity hidden sm:block"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Browse All Resources+
            </Link>
          </div>
          <FeaturedShelf />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BE PART OF SOMETHING BIGGER
          - bg: #8fb08a (mid green)
          - LEFT: big heading + small subtitle
          - RIGHT: 2 pill buttons side by side
              "Join Astera" = #ffbedd pink
              "Partner With Us" = white
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#8fb08a" }} className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              className="text-[#2e3a32]"
              style={{
                fontFamily: "'The Seasons', Georgia, serif",
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 700,
              }}
            >
              Be Part Of Something Bigger.
            </h2>
            <p className="mt-2 text-sm text-[#2e3a32]/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Together , we can turn more sparks into constellations.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/volunteer-apply"
              className="rounded-full px-8 py-3.5 text-sm font-semibold text-[#2e3a32] hover:opacity-85 transition-opacity"
              style={{ backgroundColor: "#ffbedd", fontFamily: "'Montserrat', sans-serif" }}
            >
              Join Astera
            </Link>
            <Link
              href="/partner"
              className="rounded-full px-8 py-3.5 text-sm font-semibold text-[#2e3a32] bg-white hover:opacity-85 transition-opacity"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
