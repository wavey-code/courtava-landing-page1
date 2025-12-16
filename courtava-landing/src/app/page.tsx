// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger small fade/slide-in
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <main
      className={`min-h-screen flex flex-col ${
        animate ? "page-enter-active" : "page-enter"
      }`}
    >
      {/* HERO */}
      <section className="relative flex-1">
        {/* Background image block (replace with real image later) */}
        <div className="absolute inset-0">
          <div className="h-[55vh] md:h-[60vh] bg-linear-to-b from-sky-300 to-sky-500">
            <div className="h-full w-full bg-[url('/hero-building.png')] bg-cover bg-center opacity-70" />
          </div>
          <div className="h-[45vh] md:h-[40vh] bg-[#f5f5f7]" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-6 md:pt-8">
          {/* Top nav */}
          <header className="flex items-center justify-between">
            <nav className="text-xs md:text-sm text-white/90">
              <ul className="flex gap-6">
                <li className="cursor-default">Activities</li>
                <li className="cursor-default">How it works</li>
                <li className="cursor-default">About Us</li>
                <li className="cursor-default">FAQ</li>
              </ul>
            </nav>

            {/* Only clickable CTA */}
            <Link
              href="/signup"
              className="rounded-full border border-white/70 bg-white/10 px-5 py-2 text-xs md:text-sm text-white hover:bg-white/20 transition"
            >
              Get early access
            </Link>
          </header>

          {/* Hero text */}
          <div className="mt-16 md:mt-24 flex flex-col gap-6">
            <h1 className="font-display text-[3.6rem] leading-none md:text-[5rem] text-white drop-shadow-sm">
              Courtava
            </h1>
            <p className="max-w-md text-sm md:text-base text-white/90">
              Pick-up basketball without the group chat chaos.
              <br />
              See where people are hooping — safely, nearby, and in real time.
            </p>
          </div>

        </div>

      </section>

      {/* Info section */}
      <section className="bg-[#f5f5f7] pt-6 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="max-w-xs text-xs md:text-sm text-neutral-600">
              <p>
                We’ll help you find the best courts and runs around you, and
                make sure you never hoop alone unless you want to.
              </p>
            </div>

            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-[2.1rem] leading-snug text-neutral-900">
                The Courtava hosts and hoopers are verified players.
                <br />
                We keep games organized, safe, and fair — so you just hoop.
              </h2>
            </div>
          </div>

          {/* Example "projects" = runs / gyms */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <LocationCard
              title="Legacy Arena Run"
              city="Kigali"
              tag="5v5 – Even Teams"
              img="/court-1.jpg"
            />
            <LocationCard
              title="City Lights Run"
              city="Kigali"
              tag="Open Gym"
              img="/court-2.png"
            />
            <LocationCard
              title="Sunday Hoopers Club"
              city="Kigali"
              tag="Invite-Only Run"
              img="/court-3.jpg"
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/signup"
              className="rounded-full bg-black px-8 py-3 text-sm text-white hover:scale-[1.03] transition-transform"
            >
              Be first in line for Courtava
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

type FilterPillProps = {
  label: string;
  value: string;
};

function FilterPill({ label, value }: FilterPillProps) {
  return (
    <div className="flex-1 flex items-center justify-between rounded-full bg-white/60 px-4 py-2 text-xs md:text-sm text-neutral-700 cursor-default select-none">
      <div className="flex flex-col">
        <span className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-400">
          {label}
        </span>
        <span>{value}</span>
      </div>
      {/* fake caret icon */}
      <span className="ml-3 text-neutral-400 text-xs">▾</span>
    </div>
  );
}

type LocationCardProps = {
  title: string;
  city: string;
  tag: string;
  img: string;
};

function LocationCard({ title, city, tag, img }: LocationCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition">
      <div className="h-40 md:h-44 w-full bg-neutral-200">
        {/* placeholder image box; swap with <Image> later */}
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div className="px-4 py-3 md:px-5 md:py-4">
        <h3 className="font-display text-base md:text-lg text-neutral-900">
          {title}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">{city}</p>
        <p className="mt-2 text-[0.7rem] inline-flex rounded-full bg-neutral-100 px-3 py-1 text-neutral-600">
          {tag}
        </p>
      </div>
    </article>
  );
}
