"use client";

import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import NewAbout from "@/components/NewAbout";
import NewImpact from "@/components/NewImpact";
import Intro from "@/components/Intro";
import FeaturedShelf from "@/components/FeaturedShelf";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-enter bg-cream min-h-screen flex flex-col font-body">
      <Navbar />

      <div className="flex-1">
        <NewHero />
        <NewAbout />
        <NewImpact />
        <Intro />
        <FeaturedShelf />
        <HomeCTA />
      </div>
      <Footer />
    </main>
  );
}
