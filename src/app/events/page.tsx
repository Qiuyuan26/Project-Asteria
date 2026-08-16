"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

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

const events: Event[] = [];

const typeColors: Record<Event["type"], string> = {
  workshop: "bg-sage-light text-ink",
  campaign: "bg-pink-light text-ink",
  collaboration: "bg-mint text-ink",
  other: "bg-cream text-ink",
};

const upcomingEvents = events.filter((e) => !e.past);
const pastEvents = events.filter((e) => e.past);

export default function EventsPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      <section className="bg-sage px-6 py-16 lg:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Events</h1>
          <p className="mt-4 text-sm text-ink/70 max-w-lg mx-auto">
            Workshops, campaigns, collaborations — stay up to date with everything Project Astera is running.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">Upcoming</p>
          <h2 className="font-display text-2xl font-bold text-ink">What&apos;s coming up</h2>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-sage/30 rounded-card">
            <Calendar size={36} className="mx-auto text-sage mb-3" />
            <h3 className="font-display text-lg font-semibold text-ink">No upcoming events yet</h3>
            <p className="mt-2 text-sm text-muted">Check back soon — we&apos;re always planning something new.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      {pastEvents.length > 0 && (
        <section className="pb-16 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="mb-8 border-t border-sage/20 pt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">Archive</p>
            <h2 className="font-display text-2xl font-bold text-ink">Past events</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className={`rounded-card border border-sage/20 bg-paper p-5 space-y-3 flex flex-col ${past ? "opacity-60" : "hover:-translate-y-1 hover:shadow-card transition-all"}`}>
      <div className="flex items-center justify-between">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-pill ${typeColors[event.type]}`}>
          {event.type}
        </span>
        {past && <span className="text-[10px] text-muted">Past</span>}
      </div>
      <div className="flex-1">
        <h3 className="font-display text-base font-semibold text-ink">{event.title}</h3>
        <p className="text-xs text-muted mt-1 leading-relaxed">{event.description}</p>
      </div>
      <div className="space-y-1 text-xs text-muted">
        <div className="flex items-center gap-1.5"><Calendar size={11} />{event.date}</div>
        <div className="flex items-center gap-1.5"><MapPin size={11} />{event.location}</div>
      </div>
      {event.link && !past && (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-sage-deeper hover:text-ink transition-colors">
          Learn more <ExternalLink size={11} />
        </a>
      )}
    </div>
  );
}
