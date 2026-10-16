"use client";

import DotGrid from "@/components/DotGrid";
import { FadeIn } from "@/components/FadeIn";
import MagicBento, { type BentoCardProps } from "@/components/MagicBento";
import { projects } from "@/data/content";
import { motion } from "motion/react";
import { useState } from "react";

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tagItem = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const STATUS_COLORS: Record<string, string> = {
  Live: "#22c55e",
  Work: "#3b82f6",
  Research: "#a855f7",
  Clinical: "#f97316",
};

const featuredProjects = projects.filter((project) => project.featured && project.href);
const otherProjects = projects.filter((project) => !project.featured);
const ALL_TAGS = [
  "All",
  ...Array.from(new Set(otherProjects.flatMap((project) => project.tags))),
];

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? otherProjects
      : otherProjects.filter((project) => project.tags.includes(activeTag));

  const bentoItems: BentoCardProps[] = filteredProjects.map((project) => ({
    title: project.title,
    description: project.description,
    label: project.status,
    labelColor: STATUS_COLORS[project.status],
    active: project.active,
    href: project.href,
    color: "#050505",
  }));

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <DotGrid
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        gap={34}
        dotSize={6}
        baseColor="#1a1a1a"
        activeColor="#f5f5f5"
        proximity={150}
      />

      <FadeIn className="relative z-10 mx-auto max-w-6xl space-y-12 xl:max-w-7xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Projects
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Things I&apos;ve built and shipped
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Real products first, experiments close behind. Here&apos;s the engineering
            behind the things I spend my time on.
          </p>
        </div>

        {/* Give the main products room to explain scope without burying them in the gallery. */}
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-85 flex-col justify-between gap-8 rounded-3xl border border-white/15 bg-white/4 p-6 transition-colors duration-300 hover:border-white/35 hover:bg-white/7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                    {String(index + 1).padStart(2, "0")} / Featured build
                  </span>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[11px]"
                    style={{
                      borderColor: `${STATUS_COLORS[project.status]}40`,
                      color: STATUS_COLORS[project.status],
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                {project.contribution ? (
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      What I work on
                    </p>
                    <p className="mt-2 text-sm text-white/80">{project.contribution}</p>
                  </div>
                ) : null}
                <span className="mt-6 inline-flex items-center text-sm font-medium text-white/75 transition group-hover:text-white">
                  Explore project <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Beyond the main builds
            </p>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Tools, experiments, and research
            </h3>
            <p className="text-sm text-white/55">
              Side projects still count. Especially the ones that solve real problems.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-2"
            variants={tagContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            aria-label="Filter other projects by category"
          >
            {ALL_TAGS.map((tag) => (
              <motion.button
                key={tag}
                type="button"
                variants={tagItem}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
                  activeTag === tag
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>

          <div className="flex justify-center">
            {bentoItems.length > 0 ? (
              <MagicBento
                items={bentoItems}
                glowColor="255, 255, 255"
                spotlightRadius={220}
                particleCount={10}
                enableTilt
                enableMagnetism
                textAutoHide
              />
            ) : (
              <p className="py-12 text-sm text-white/55">
                No projects in this category yet.
              </p>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
