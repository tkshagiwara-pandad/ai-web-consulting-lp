/**
 * Sora tone rules
 *
 * calm
 * quiet
 * reflective
 * minimal
 *
 * future Sora features
 *
 * daily reflection
 * long-term patterns
 * emotional trends
 * deeper insights
 */
export const soraMessages = [
  "Take your time.",
  "There is no rush.",
  "You can start anywhere.",
  "It does not need to be fully clear yet.",
  "You can put it into words slowly.",
] as const;

export const pickSoraMessage = (seed: string) => {
  const index =
    seed.split("").reduce((total, char) => total + char.charCodeAt(0), 0) % soraMessages.length;

  return soraMessages[index];
};
