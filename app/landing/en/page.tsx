import type { Metadata } from "next";
import { getBrand, getDictionary } from "@/lib/i18n";
import { pickSoraMessage } from "@/lib/sora-messages";

const locale = "en" as const;
const dict = getDictionary(locale);
const site = getBrand(locale);

export const metadata: Metadata = {
  title: site.metadata.title,
  description: "A quiet place to leave today's words and return to them later.",
};

export default function EnglishLandingPage() {
  const soraMessage = pickSoraMessage(site.name);

  return (
    <main className="min-h-screen bg-white px-5 py-9 text-stone-800 sm:px-6 sm:py-11">
      <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
        <section className="space-y-3.5 rounded-[24px] border border-violet-100/60 bg-white/88 p-5 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-violet-500/60">{site.withSora}</p>
          <div className="space-y-2.5">
            <h1 className="text-3xl font-medium text-stone-900 sm:text-5xl">{site.name}</h1>
            <p className="text-base text-stone-600 sm:text-lg">{site.tagline}</p>
          </div>
          <div className="space-y-1.5 text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
            <p>Not a place for answers.</p>
            <p>A place to leave a few words from today.</p>
            <p>You can come back to them later.</p>
          </div>
        </section>

        <section className="space-y-3 rounded-[22px] border border-violet-100/55 bg-white/74 p-5 sm:p-6">
          <p className="text-sm leading-7 text-stone-700">
            Some feelings are not for solving right away.
          </p>
          <p className="text-sm leading-7 text-stone-700">
            Kokoro Compass is a quiet place to leave those words behind.
          </p>
          <p className="text-sm leading-7 text-stone-700">
            Sora stays nearby, but your words remain at the center.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[20px] border border-violet-100/55 bg-white/78 p-4.5 sm:p-5">
            <h2 className="text-lg font-medium text-stone-900">Leave</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">Leave a few words from today.</p>
          </article>
          <article className="rounded-[20px] border border-violet-100/55 bg-white/78 p-4.5 sm:p-5">
            <h2 className="text-lg font-medium text-stone-900">Settle</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">Let the words settle a little.</p>
          </article>
          <article className="rounded-[20px] border border-violet-100/55 bg-white/78 p-4.5 sm:p-5">
            <h2 className="text-lg font-medium text-stone-900">Keep</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">Return to them when you want.</p>
          </article>
        </section>

        <section className="rounded-[22px] border border-violet-100/55 bg-white/74 p-5 sm:p-6">
          <div className="space-y-2.5">
            <p className="text-[13px] leading-6 text-stone-600">Sora</p>
            <p className="text-sm leading-7 text-stone-700">{soraMessage}</p>
            <p className="text-sm leading-7 text-stone-700">
              You can leave your words slowly, without having to finish them.
            </p>
            <p className="text-sm leading-7 text-stone-600">{dict.loading}</p>
          </div>
        </section>

        <section className="rounded-[22px] border border-violet-100/55 bg-violet-50/24 p-5 sm:p-6">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-500/95 px-4.5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            Leave today's words
          </button>
        </section>
      </div>
    </main>
  );
}
