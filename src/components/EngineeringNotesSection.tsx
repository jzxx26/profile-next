import DotGrid from "@/components/DotGrid";
import { FadeIn } from "@/components/FadeIn";
import { engineeringNotes } from "@/data/content";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function EngineeringNotesSection() {
  return (
    <section
      id="engineering-notes"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <DotGrid
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        gap={38}
        dotSize={6}
        baseColor="#1a1a1a"
        activeColor="#fafafa"
        proximity={150}
      />
      <FadeIn className="relative z-10 mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Engineering notes
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Behind the build
          </h2>
          <p className="mx-auto max-w-2xl text-white/65">
            Some of the decisions, dead ends, and experiments behind what I build.
            More useful than pretending every first attempt worked.
          </p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-3">
          {engineeringNotes.map((note, index) => (
            <details
              key={note.id}
              className="group overflow-hidden rounded-3xl border border-white/12 bg-neutral-950/85 transition-colors hover:border-white/30 open:border-white/35 open:bg-neutral-950"
            >
              <summary className="cursor-pointer list-none p-6 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white [&::-webkit-details-marker]:hidden sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-white/40">
                    {String(index + 1).padStart(2, "0")} / FIELD NOTE
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                </div>
                <p className="mt-7 text-xs uppercase tracking-[0.13em] text-white/50">
                  {note.project}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {note.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {note.preview}
                </p>
                <p className="mt-5 font-mono text-[11px] leading-relaxed text-white/45">
                  {note.discipline}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-white/75 group-open:hidden">
                    Read the story
                  </span>
                  <span className="hidden text-xs font-medium text-white/75 group-open:inline">
                    Hide details
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-4 w-4 text-white/60 transition-transform duration-200 group-open:rotate-180"
                  />
                </div>
              </summary>

              <div className="space-y-5 border-t border-white/10 px-6 py-6 sm:px-7">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    The problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {note.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    The decision
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {note.decision}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    What happened
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {note.result}
                  </p>
                </div>
                <div className="border-l-2 border-white/40 pl-4">
                  <p className="text-sm italic leading-relaxed text-white/75">
                    {note.lesson}
                  </p>
                </div>
                <a
                  href={note.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  View project
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </details>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
