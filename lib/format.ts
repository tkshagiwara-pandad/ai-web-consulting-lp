import type { Locale } from "@/lib/i18n";

export const formatRelativeDate = (value: string, locale: Locale = "ja") => {
  const now = new Date();
  const target = new Date(value);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfTarget = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diffDays = Math.floor(
    (startOfToday.getTime() - startOfTarget.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (locale === "en") {
    if (diffDays <= 0) {
      return "Today";
    }

    if (diffDays === 1) {
      return "Yesterday";
    }

    if (diffDays < 7) {
      return `${diffDays} days ago`;
    }

    if (diffDays < 14) {
      return "Last week";
    }

    return `${Math.floor(diffDays / 7)} weeks ago`;
  }

  if (diffDays <= 0) {
    return "今日";
  }

  if (diffDays === 1) {
    return "昨日";
  }

  if (diffDays < 7) {
    return `${diffDays}日前`;
  }

  if (diffDays < 14) {
    return "1週間前";
  }

  return `${Math.floor(diffDays / 7)}週間前`;
};
