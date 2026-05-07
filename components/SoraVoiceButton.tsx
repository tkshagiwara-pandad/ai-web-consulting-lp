"use client";

import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import {
  isSpeechSynthesisSupported,
  speakSoraText,
  stopSoraVoice,
} from "@/lib/sora-voice";

type SoraVoiceButtonProps = {
  text: string;
  locale?: Locale;
};

export const SoraVoiceButton = ({ text, locale = "ja" }: SoraVoiceButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const handleVoicesChanged = () => {};

    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
      setIsPlaying(false);
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!isSpeechSynthesisSupported()) {
    return null;
  }

  const handleToggle = () => {
    if (isPlaying) {
      stopSoraVoice();
      setIsPlaying(false);
      return;
    }

    speakSoraText(text, locale, {
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="relative z-10 inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-violet-200/65 bg-white/72 px-2.5 py-1.5 text-sm text-violet-700/90 transition hover:bg-violet-50/65 hover:text-violet-800"
      aria-pressed={isPlaying}
      aria-label={
        locale === "en"
          ? isPlaying
            ? "Stop Sora voice"
            : "Listen to Sora"
          : isPlaying
            ? "ソラの声を停止する"
            : "ソラの声を聞く"
      }
    >
      {isPlaying ? dict.playing : dict.listen}
    </button>
  );
};
