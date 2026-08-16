"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Why Start a Chapter?",
    body: "Lead meaningful change in your community. Build leadership and team management skills. Earn verified volunteer service hours. Strengthen your college and scholarship applications. Organize impactful projects, campaigns, and workshops. Join a global network of young changemakers. Create opportunities for others while growing yourself.",
  },
  {
    num: "02",
    title: "Apply to Start a Chapter in Your City or Community",
    body: "Complete our Chapter Application Form to express your interest in launching a Project Astera chapter. After reviewing your application, our team will schedule an introductory meeting to guide you through the process. Once approved, you'll report to a dedicated leadership team from your city or community and work with us to establish a local chapter. We'll provide the resources, guidance, and support you need to begin creating meaningful impact.",
  },
  {
    num: "03",
    title: "Build Your Leadership Team",
    body: "President: Lead the chapter, oversee operations, coordinate projects, and ensure the branch is actively working towards its goals. Vice President: Support the President, assist with chapter management, and help coordinate volunteers, events, and internal operations. Secretary: Manage internal communications, maintain records, schedule meetings, and keep members informed with updates and announcements. Director of Public Relations: Manage the branch's social media presence, promote events and campaigns, and strengthen community engagement through creative content and outreach.",
  },
  {
    num: "04",
    title: "Launching a Successful Chapter",
    body: "Complete Your Onboarding: Attend orientation and leadership training sessions with the Project Astera Global Team to prepare for leading your chapter successfully. Build Your Community: Introduce your chapter to your local community through social media, outreach, and events to attract passionate volunteers and supporters. Lead Meaningful Initiatives: Organize projects, workshops, campaigns, and volunteer opportunities that align with Project Astera's mission and create a lasting impact in your community. Stay Connected: Maintain regular communication with the Global Team, submit chapter updates, and collaborate with other Astera chapters around the world.",
  },
];

export default function InitiativesPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <section className="bg-sage px-6 py-16 lg:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Start a Chapter</h1>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid gap-6 lg:grid-cols-2 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <span className="font-display text-6xl font-bold text-sage">{step.num}</span>
                <h2 className="font-display text-xl font-bold text-ink mt-2 mb-3">{step.title}</h2>
                <p className="text-sm text-ink/70 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-light px-6 py-16 lg:px-10 text-center">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="font-display text-3xl font-bold text-ink">Ready to start your chapter?</h2>
          <p className="text-sm text-ink/70">Join a global network of young changemakers.</p>
          <Link
            href="/contact"
            className="inline-block rounded-pill bg-ink text-cream px-8 py-3 text-sm font-semibold hover:bg-ink/80 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
