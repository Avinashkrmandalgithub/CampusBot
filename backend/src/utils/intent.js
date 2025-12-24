export const detectIntent = (words) => {
  const intents = {
    event: ["event", "fest", "hackathon", "seminar"],
    news: ["notice", "holiday", "announcement"],
    faq: ["how", "when", "where", "procedure", "fees"],
  };

  for (const [intent, keys] of Object.entries(intents)) {
    if (keys.some((k) => words.includes(k))) {
      return intent;
    }
  }
  return "unknown";
};
