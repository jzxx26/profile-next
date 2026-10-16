"use client";

import DotGrid from "@/components/DotGrid";
import { FadeIn } from "@/components/FadeIn";
import { engineeringNotes, type EngineeringNote } from "@/data/content";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function EngineeringNotesSection() {
  const [selectedNote, setSelectedNote] = useState<EngineeringNote | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedNote && !dialog.open) {
      dialog.showModal();
    } else if (!selectedNote && dialog.open) {
      dialog.close();
    }
  }, [selectedNote]);

  const closeDialog = () => dialogRef.current?.close();

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

        <div className="grid gap-4 lg:grid-cols-3">
          {engineeringNotes.map((note, index) => (
            <button
              key={note.id}
              type="button"
              aria-haspopup="dialog"
              aria-label={"Read the story: " + note.title}
              onClick={() => setSelectedNote(note)}
              className="group flex h-full min-h-80 w-full flex-col rounded-3xl border border-white/12 bg-neutral-950/85 p-6 text-left transition-colors hover:border-white/35 hover:bg-neutral-900/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-7"
            >
              <div className="flex w-full items-center justify-between gap-4">
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
              <div className="mt-auto flex w-full items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs font-medium text-white/75 group-hover:text-white">
                  Read the story
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </button>
          ))}
        </div>
      </FadeIn>

      <dialog
        ref={dialogRef}
        id="engineering-story-dialog"
        aria-labelledby={
          selectedNote ? "engineering-story-title-" + selectedNote.id : undefined
        }
        onClose={() => setSelectedNote(null)}
        onClick={(event) => {
          // A click on the native backdrop targets the dialog itself.
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-neutral-950 p-0 text-white shadow-2xl shadow-black/70 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {selectedNote ? (
          <div>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-neutral-950/95 px-6 py-5 backdrop-blur-sm sm:px-8">
              <p className="pt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                Behind the build / {selectedNote.project}
              </p>
              <button
                type="button"
                onClick={closeDialog}
                autoFocus
                aria-label="Close engineering story"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-7 px-6 py-7 sm:px-8 sm:py-9">
              <div>
                <h3
                  id={"engineering-story-title-" + selectedNote.id}
                  className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {selectedNote.title}
                </h3>
                <p className="mt-3 font-mono text-xs leading-relaxed text-white/50">
                  {selectedNote.discipline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                  {selectedNote.preview}
                </p>
              </div>

              {([
                ["The problem", selectedNote.problem],
                ["The decision", selectedNote.decision],
                ["What happened", selectedNote.result],
              ] as const).map(([heading, copy]) => (
                <div key={heading}>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                    {heading}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    {copy}
                  </p>
                </div>
              ))}

              <blockquote className="border-l-2 border-white/40 pl-4 text-sm italic leading-relaxed text-white/75">
                {selectedNote.lesson}
              </blockquote>
              <a
                href={selectedNote.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View project
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
