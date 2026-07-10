"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedShelf from "@/components/FeaturedShelf";
import Hierarchy from "@/components/Hierarchy";
import Roles from "@/components/Roles";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { Megaphone, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { announcements } = useApp();
  const [closedAnnouncements, setClosedAnnouncements] = useState<string[]>([]);

  const activeAnnouncements = announcements.filter(
    (a) => !closedAnnouncements.includes(a.id)
  );

  const handleClose = (id: string) => {
    setClosedAnnouncements((prev) => [...prev, id]);
  };

  return (
    <main className="page-enter bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Announcements Bar */}
      {activeAnnouncements.length > 0 && (
        <div className="bg-sage-dark/5 border-b border-sage-dark/10">
          <div className="mx-auto max-w-7xl px-6 py-2 lg:px-10 flex flex-col gap-2">
            {activeAnnouncements.map((ann) => {
              const bgType =
                ann.type === "success"
                  ? "bg-leaf-light/50 border-leaf/30"
                  : ann.type === "warning"
                  ? "bg-butter-light/50 border-butter/30"
                  : "bg-blush-light/50 border-blush/30";

              return (
                <div
                  key={ann.id}
                  className={`flex items-center justify-between gap-4 rounded-card border px-4 py-2 text-xs text-sage-dark ${bgType} transition-all`}
                >
                  <div className="flex items-center gap-2">
                    <Megaphone size={14} className="shrink-0 animate-pulse" style={{ animationDuration: "2.5s" }} />
                    <span>
                      <strong className="font-semibold">{ann.title}:</strong>{" "}
                      {ann.content}
                    </span>
                  </div>
                  <button
                    onClick={() => handleClose(ann.id)}
                    className="shrink-0 text-sage-dark/60 hover:text-sage-dark"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex-1">
        <Hero />

        {/* Who We Are — intro before resources */}
        <section className="px-6 py-20 lg:px-10 border-b border-sage-dark/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-5">
                <p className="reveal font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  Who we are
                </p>
                <h2 className="reveal font-display text-4xl font-semibold tracking-tight text-sage-dark sm:text-5xl leading-tight">
                  Education without borders.
                </h2>
                <p className="reveal text-base leading-relaxed text-ink/70 max-w-lg">
                  Project Astera is a volunteer-led nonprofit on a mission to make high-quality study materials free and accessible to every student — regardless of where they live or what they can afford.
                </p>
                <p className="reveal text-base leading-relaxed text-ink/70 max-w-lg">
                  We do this by building an open library of notes, worksheets, and past papers, filed by country, curriculum, grade, and subject — so finding exactly what you need takes seconds, not hours.
                </p>
                <div className="reveal flex flex-wrap gap-3 pt-2">
                  <a
                    href="/about"
                    className="rounded-card bg-sage-dark px-5 py-2.5 text-sm font-semibold text-paper shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Our story
                  </a>
                  <a
                    href="/about#team"
                    className="rounded-card border-2 border-sage-dark/15 px-5 py-2.5 text-sm font-semibold text-sage-dark transition-all hover:border-sage-dark/40"
                  >
                    Meet the team
                  </a>
                </div>
              </div>

              <div className="reveal-group grid grid-cols-2 gap-4">
                {[
                  { label: "Free forever", desc: "No paywalls, no sign-up required to browse.", color: "bg-leaf-light" },
                  { label: "Volunteer-built", desc: "Every resource is submitted and verified by our global team.", color: "bg-blush-light" },
                  { label: "Curriculum-aligned", desc: "Organized by country, syllabus, grade, and chapter.", color: "bg-butter-light" },
                  { label: "Always growing", desc: "New notes added every week by volunteers worldwide.", color: "bg-sage-light" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-card ${item.color} p-5 space-y-2`}
                  >
                    <h4 className="font-display font-semibold text-sage-dark text-sm">{item.label}</h4>
                    <p className="text-xs leading-relaxed text-ink/65">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Stats />
        <FeaturedShelf />
        <Hierarchy />
        <Roles />
      </div>
      <Footer />
    </main>
  );
}
