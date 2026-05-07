"use client";

import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { SoraVoiceButton } from "@/components/SoraVoiceButton";

type SoraResponseCardProps = {
  text: string;
  locale?: Locale;
  enableVoice?: boolean;
};

export const SoraResponseCard = ({
  text,
  locale = "ja",
  enableVoice = true,
}: SoraResponseCardProps) => {
  const dict = getDictionary(locale);

  return (
    <article className="rounded-[16px] border border-violet-100/55 bg-white/80 p-4 sm:p-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-300/80" aria-hidden="true" />
          <p className="text-[10px] uppercase tracking-[0.14em] text-stone-500/80">{dict.soraLabel}</p>
        </div>
        {enableVoice ? <SoraVoiceButton text={text} locale={locale} /> : null}
      </header>

      <div className="mt-3 max-w-prose space-y-3.5">
        {text.split("\n").filter(Boolean).map((paragraph, index) => (
          <p key={`${index}-${paragraph}`} className="text-sm leading-7 text-stone-800/92">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};
