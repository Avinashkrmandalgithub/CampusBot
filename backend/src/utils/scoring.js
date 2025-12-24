export const scoreMatch = (text, words) => {
  let score = 0;
  const lower = text.toLowerCase();

  words.forEach((word) => {
    if (lower.includes(word)) score += 1;
  });

  return score;
};
