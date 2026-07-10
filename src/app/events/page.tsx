"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

// ─── Data — replace with real events or pull from DB later ──────────────────

type Event = {
  id: string;
  title: string;
  type: "workshop" | "campaign" | "collaboration" | "other";
  date: string;
  location: string;
  description: string;
  link?: string;
  past?: boolean;
};

const events: Event[] = [
  // Add upcoming events here
  // Example:
  // {
  //   id: "1",
  //   title: "Study Skills Workshop",
  //   type: "workshop",
  //   date: "August 2026",
  //   location: "Online",
  //   description: "A free live session on how to organize notes for GCSE exams.",
  //   link: "https://...",
  // },
];

const typeColors: Record<Event["type"], string> = {
  workshop: "bg-leaf-light text-sage-dark",
  campaign: "bg-blush-light text-sage-dark",
  collaboration: "bg-butter-light text-sage-dark",
  other: "bg-sage-light text-sage-dark",
};

const upcomingEvents = events.filter((e) => !e.past);
const pastEvents = events.filter((e) => e.past);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function EventsPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <section className="bg-sage-dark text-paper py-16 px-6 lg:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-leaf-light">
            What&apos;s happening
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Events
          </h1>
          <p className="mt-5 text-base leading-relaxed text-paper/80 max-w-xl mx-auto">
            Workshops, campaigns, collaborations — stay up to date with everything Project Astera is running or taking part in.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Upcoming
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-sage-dark">
            What&apos;s coming up
          </h2>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="text-center py-20 bg-paper rounded-card border-2 border-dashed border-sage-dark/10">
            <Calendar size={40} className="mx-auto text-sage/40 mb-4" />
            <h3 className="font-display text-xl font-semibold text-sage-dark">No upcoming events yet</h3>
            <p className="mt-2 text-sm text-ink/55 max-w-sm mx-auto">
              Check back soon — we&apos;re always planning new workshops and campaigns.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="pb-20 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="mb-10 border-t border-sage-dark/10 pt-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Archive
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-sage-dark">
              Past events
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function EventCard({ event, past }: { event: Event; past?: boolean }) {
  return (
    <div className={`rounded-card border-2 border-sage-dark/8 bg-paper p-6 space-y-4 flex flex-col ${past ? "opacity-70" : "hover:-translate-y-1 hover:border-sage/20 transition-all"}`}>
      <div className="flex items-start justify-between gap-3">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded font-mono ${typeColors[event.type]}`}>
          {event.type}
        </span>
        {past && (
          <span className="text-[10px] font-mono font-bold text-ink/35 uppercase tracking-wider">Past</span>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="font-display text-lg font-semibold text-sage-dark leading-snug">{event.title}</h3>
        <p className="text-xs leading-relaxed text-ink/65">{event.description}</p>
      </div>

      <div className="space-y-1.5 text-xs text-ink/50 font-mono">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={12} />
          <span>{event.location}</span>
        </div>
      </div>

      {event.link && !past && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage hover:text-sage-dark transition-colors"
        >
          Learn more <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}
