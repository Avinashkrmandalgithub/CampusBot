export const detectIntent = (words) => {
  const intents = {
    faq: ["how", "procedure", "process", "fees", "facility", "library"],
    event: ["event", "fest", "seminar", "hackathon"],
    news: ["notice", "announcement", "holiday"],
    university: ["placement", "ranking", "about", "infrastructure"],
  };

  for (const [intent, keys] of Object.entries(intents)) {
    if (keys.some((k) => words.includes(k))) {
      return intent;
    }
  }

  return "unknown";
};
