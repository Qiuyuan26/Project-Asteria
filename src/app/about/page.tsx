"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Heart } from "lucide-react";
import Link from "next/link";

// ─── Data — easy to update as team grows ────────────────────────────────────

const founders = [
  {
    name: "Elena Rostova",
    role: "Co-Founder & Education Lead",
    location: "United Kingdom",
    bio: "Former secondary school teacher with a decade of experience building curriculum resources across Europe. Started Astera to give every student the same quality of study materials she had.",
    color: "bg-leaf-light",
  },
  {
    name: "Arjun Mehta",
    role: "Co-Founder & Engineering Director",
    location: "India",
    bio: "Full-stack engineer and lifelong student advocate. Built the Astera platform from scratch and leads all technical decisions.",
    color: "bg-blush-light",
  },
];

const departments: { name: string; members: { name: string; role: string; location: string; color: string }[] }[] = [
  {
    name: "Engineering",
    members: [
      { name: "Arjun Mehta", role: "Engineering Director", location: "India", color: "bg-blush-light" },
    ],
  },
  {
    name: "Content & Curriculum",
    members: [
      { name: "Chloe Jenkins", role: "Community Organizer", location: "Australia", color: "bg-butter-light" },
      { name: "Maria Santos", role: "Curriculum Director", location: "Philippines", color: "bg-sage-light" },
    ],
  },
];

const milestones = [
  { year: "2025", event: "Project Astera founded with a mission to make free, organized study materials available to every student." },
  { year: "2026", event: "First resources published. Building our volunteer team and expanding to more countries and subjects." },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-sage-dark text-paper py-16 px-6 lg:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-leaf-light">
            Our Story & Journey
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            About Project Astera
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-paper/85">
            We believe that high-quality, structured learning guides should be accessible to students everywhere, regardless of their location or economic background.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl font-bold text-sage-dark sm:text-4xl leading-tight">
              Our Mission to Democratize Global Education
            </h2>
            <p className="text-sm leading-relaxed text-ink/75">
              Project Astera is a volunteer-led nonprofit initiative. In many regions, students prepare for exams using outdated books or disorganized internet searches. We bridge the gap by compiling notes directly aligned with regional school curricula.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 pt-4">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-card bg-leaf-light text-sage-dark shrink-0">
                  <Globe size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-sage-dark text-sm">Organized Taxonomy</h4>
                  <p className="text-xs text-ink/60 mt-1">Every worksheet is filed down to country, syllabus, grade, and chapter.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-card bg-blush-light text-sage-dark shrink-0">
                  <Heart size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-sage-dark text-sm">Volunteer Verified</h4>
                  <p className="text-xs text-ink/60 mt-1">Every study guide is review-moderated by our admin team before going live.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-paper p-8 rounded-card border-2 border-sage-dark/10 shadow-card space-y-6">
            <h3 className="font-display text-xl font-bold text-sage-dark">Our Milestones</h3>
            <div className="space-y-4 divide-y divide-sage-dark/5">
              {milestones.map((m) => (
                <div key={m.year} className="pt-4 first:pt-0 flex gap-4 text-sm">
                  <span className="font-mono font-bold text-sage shrink-0">{m.year}</span>
                  <p className="text-ink/75">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="bg-sage-dark text-paper py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-leaf-light">
              Where it all started
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Meet the Founders
            </h2>
            <p className="mt-2 text-sm text-paper/60 max-w-md mx-auto leading-relaxed">
              Two people who believed free, organized study materials could change a student&apos;s life.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-card bg-paper/10 border border-paper/15 p-8 space-y-4 hover:bg-paper/15 transition-colors"
              >
                <div className={`h-16 w-16 rounded-full ${founder.color} flex items-center justify-center text-sage-dark font-bold text-2xl`}>
                  {founder.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-paper">{founder.name}</h3>
                  <p className="text-xs font-mono text-leaf-light mt-0.5">{founder.role}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold text-paper/60 bg-paper/10 px-2 py-0.5 rounded border border-paper/15">
                    {founder.location}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-paper/70">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams & Departments Section */}
      <section id="team" className="bg-paper border-y border-sage-dark/10 py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              The Hearts Behind Astera
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-sage-dark sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-ink/60 max-w-md mx-auto leading-relaxed">
              Astera is run by a global team of teachers, engineers, and student leaders. We&apos;re always growing — new members welcome.
            </p>
          </div>

          <div className="space-y-14">
            {departments.map((dept) => (
              <div key={dept.name}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px flex-1 bg-sage-dark/10" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sage shrink-0">
                    {dept.name}
                  </h3>
                  <span className="h-px flex-1 bg-sage-dark/10" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {dept.members.map((member) => (
                    <div
                      key={member.name}
                      className="group p-6 rounded-card border-2 border-sage-dark/8 bg-cream/35 hover:-translate-y-1 hover:border-sage/20 transition-all text-center"
                    >
                      <div className={`h-14 w-14 mx-auto rounded-full ${member.color} flex items-center justify-center text-sage-dark font-bold text-lg mb-4`}>
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="font-display font-semibold text-sage-dark">{member.name}</h4>
                      <p className="text-xs text-ink/50 mt-1 font-mono">{member.role}</p>
                      <span className="inline-block mt-3 text-[10px] font-bold text-sage bg-paper px-2 py-0.5 rounded border">
                        {member.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-10 max-w-4xl mx-auto w-full text-center space-y-6">
        <h2 className="font-display text-3xl font-bold text-sage-dark">Want to support our mission?</h2>
        <p className="text-sm text-ink/70 max-w-lg mx-auto leading-relaxed">
          You don&apos;t have to be a full-time teacher to help. We are always looking for students who can submit notes, worksheets, or translate files.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/volunteer-apply" className="rounded-card bg-sage-dark text-paper px-6 py-3 text-xs font-semibold shadow hover:bg-sage transition-colors">
            Become a Volunteer
          </Link>
          <Link href="/partner" className="rounded-card border-2 border-sage-dark/15 text-sage-dark px-6 py-3 text-xs font-semibold hover:border-sage-dark/30 transition-colors">
            Partner With Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
