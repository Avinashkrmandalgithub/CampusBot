export const scoreMatch = (text, words) => {
  let score = 0;
  const lower = text.toLowerCase();

  words.forEach((word) => {
    if (lower.includes(word)) score += 1;
  });

  // Bonus for phrase-like matches
  if (words.length > 2 && lower.includes(words.join(" "))) {
    score += 3;
  }

  return score;
};
