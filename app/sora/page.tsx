import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sora",
  description: "Sora is a quiet companion who stays near your words.",
};

export default function SoraPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-9 text-stone-800 sm:px-6 sm:py-11">
      <div className="mx-auto max-w-3xl space-y-5 sm:space-y-7">
        <section className="rounded-[24px] border border-violet-100/60 bg-white/86 p-5 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-violet-500/60">Sora</p>
          <h1 className="mt-2.5 text-3xl font-medium text-stone-900 sm:text-4xl">Sora</h1>
          <div className="mt-4 space-y-2.5 text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
            <p>Sora is a quiet companion who stays near your words.</p>
            <p>Sora does not give answers.</p>
            <p>Sora simply helps you leave them a little more clearly.</p>
          </div>
        </section>

        <section className="rounded-[24px] border border-violet-100/60 bg-white/86 p-5 sm:p-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-violet-500/60">ソラ</p>
          <h2 className="mt-2.5 text-2xl font-medium text-stone-900 sm:text-3xl">ソラ</h2>
          <div className="mt-4 space-y-2.5 text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
            <p>ソラは、あなたの言葉のそばに静かにいる伴走者です。</p>
            <p>答えを与える存在ではなく、言葉を少し整える存在です。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
