import type { Locale } from "@/lib/i18n";

/**
 * Sora voice style
 *
 * calm
 * slow
 * soft
 * neutral
 *
 * Sora is not a character.
 * Sora is not a mascot.
 * Sora is a quiet presence for reflection.
 *
 * future voice
 *
 * - neutral voice as default
 * - optional premium custom voice
 * - OpenAI TTS / ElevenLabs integration
 * - user-selectable voice packs should remain subtle and non-character-like
 */

type VoiceConfig = {
  locale: Locale;
  preferredVoiceName?: string;
  rate: number;
  pitch: number;
  volume: number;
};

type SpeakSoraTextOptions = {
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
};

export const soraVoiceConfig: Record<Locale, VoiceConfig> = {
  ja: {
    locale: "ja",
    preferredVoiceName: undefined,
    rate: 0.9,
    pitch: 1,
    volume: 1,
  },
  en: {
    locale: "en",
    preferredVoiceName: undefined,
    rate: 0.9,
    pitch: 1,
    volume: 1,
  },
};

export const getSpeechLang = (locale: Locale) => (locale === "en" ? "en-US" : "ja-JP");

export const pickSoraVoice = (locale: Locale) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return undefined;
  }

  const config = soraVoiceConfig[locale];
  const voices = window.speechSynthesis.getVoices();
  const speechLang = getSpeechLang(locale);
  const matchedVoices = voices.filter((voice) => voice.lang === speechLang);

  if (config.preferredVoiceName) {
    return matchedVoices.find((voice) => voice.name === config.preferredVoiceName);
  }

  return matchedVoices.find((voice) => voice.default) || matchedVoices[0];
};

export const speakSoraText = (
  text: string,
  locale: Locale = "ja",
  options?: SpeakSoraTextOptions,
) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return false;
  }

  const config = soraVoiceConfig[locale];
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getSpeechLang(locale);
  utterance.rate = config.rate;
  utterance.pitch = config.pitch;
  utterance.volume = config.volume;
  utterance.voice = pickSoraVoice(locale) || null;
  utterance.onstart = () => options?.onStart?.();
  utterance.onend = () => options?.onEnd?.();
  utterance.onerror = () => options?.onError?.();

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);

  return true;
};

export const stopSoraVoice = () => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
};

export const isSpeechSynthesisSupported = () => {
  return typeof window !== "undefined" && "speechSynthesis" in window;
};
