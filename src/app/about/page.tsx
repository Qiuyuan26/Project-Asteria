"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// ── Data ─────────────────────────────────────────────────────────────────────

const founders = [
  {
    name: "Placeholder",
    role: "Co-Founder",
    bio: "Bio coming soon.",
    color: "bg-sage-light",
  },
  {
    name: "Placeholder",
    role: "Co-Founder",
    bio: "Bio coming soon.",
    color: "bg-pink-light",
  },
];

const presidents = [
  { name: "Placeholder", role: "President", location: "", photo: null },
  { name: "Placeholder", role: "President", location: "", photo: null },
];

const teamLeads = [
  { name: "Placeholder", role: "Team Lead", color: "bg-pink-light" },
  { name: "Placeholder", role: "Team Lead", color: "bg-sage-light" },
  { name: "Placeholder", role: "Team Lead", color: "bg-mint" },
  { name: "Placeholder", role: "Team Lead", color: "bg-pink-light" },
];

const coreTeam: { name: string; photo: null }[] = [
  // Add core team members here
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <section className="bg-sage px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 mb-2">Astera.nonprofit</p>
            <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">About Project Astera</h1>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-md">
              We are a youth-led international nonprofit committed to building a more equitable and compassionate world through education, advocacy, and cross-cultural collaboration.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-cream/60 rounded-card p-4 flex gap-4">
              <div className="font-display text-3xl font-bold text-ink">2+</div>
              <div>
                <p className="text-xs font-semibold text-ink">Resources Shared</p>
                <p className="text-xs text-muted">and growing</p>
              </div>
            </div>
            <div className="bg-cream/60 rounded-card p-4 flex gap-4">
              <div className="font-display text-3xl font-bold text-ink">0+</div>
              <div>
                <p className="text-xs font-semibold text-ink">Students Helped</p>
                <p className="text-xs text-muted">worldwide</p>
              </div>
            </div>
            <div className="bg-cream/60 rounded-card p-4 flex gap-4">
              <div className="font-display text-3xl font-bold text-ink">20+</div>
              <div>
                <p className="text-xs font-semibold text-ink">Countries</p>
                <p className="text-xs text-muted">represented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-pink-light px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Astera.nonprofit</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Our Mission to Democratize Global Education</h2>
          <p className="text-sm text-ink/70 leading-relaxed max-w-2xl">
            Project Astera is a volunteer-led nonprofit initiative. In many regions, students prepare for exams using outdated books or disorganized internet searches. We bridge the gap by compiling notes directly aligned with regional school curricula — free for every student, everywhere.
          </p>
        </div>
      </section>

      {/* Meet the Founders */}
      <section id="founders" className="bg-cream px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center mb-1">Founding Pillars</p>
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-10">Meet The Founders</h2>
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {founders.map((f, i) => (
              <div key={i} className={`rounded-card ${f.color} p-6 space-y-3`}>
                <div className="w-16 h-16 rounded-full bg-paper/60 flex items-center justify-center text-2xl">🌸</div>
                <h3 className="font-display font-bold text-ink">{f.name}</h3>
                <p className="text-xs font-semibold text-muted">{f.role}</p>
                <p className="text-xs text-ink/65 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Presidents */}
      <section id="presidents" className="bg-sage px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 text-center mb-1">Global</p>
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-10">Meet The Presidents</h2>
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {presidents.map((p, i) => (
              <div key={i} className="rounded-card bg-cream/60 overflow-hidden">
                <div className="h-40 bg-sage-light flex items-center justify-center text-4xl">👤</div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-ink">{p.name}</h3>
                  <p className="text-xs text-muted">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Leads */}
      <section id="team" className="bg-pink-light px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center mb-1">Astera.nonprofit</p>
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-10">Meet The Team Leads</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {teamLeads.map((m, i) => (
              <div key={i} className={`rounded-card ${m.color} p-5 text-center space-y-2`}>
                <div className="w-14 h-14 mx-auto rounded-full bg-paper/60 flex items-center justify-center text-2xl">🌸</div>
                <h4 className="font-display font-semibold text-ink text-sm">{m.name}</h4>
                <p className="text-xs text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Core Team */}
      <section className="bg-cream px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center mb-1">Astera.nonprofit</p>
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-10">Meet The Core Team</h2>
          {coreTeam.length === 0 ? (
            <p className="text-center text-sm text-muted">Team members coming soon.</p>
          ) : (
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-6 max-w-4xl mx-auto">
              {coreTeam.map((m, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage-light flex items-center justify-center text-2xl">👤</div>
                  <p className="text-xs font-semibold text-ink">{m.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage px-6 py-16 lg:px-10 text-center">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="font-display text-3xl font-bold text-ink">Want to support our mission?</h2>
          <p className="text-sm text-ink/70">
            You don&apos;t have to be a full-time teacher to help. We&apos;re always looking for passionate people.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link href="/volunteer-apply" className="rounded-pill bg-ink text-cream px-6 py-3 text-sm font-semibold hover:bg-ink/80 transition-colors">
              Become a Volunteer
            </Link>
            <Link href="/partner" className="rounded-pill bg-pink text-ink px-6 py-3 text-sm font-semibold hover:bg-pink-dark hover:text-white transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
