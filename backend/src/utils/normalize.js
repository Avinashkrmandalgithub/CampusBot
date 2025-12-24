export const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/\bu\b/g, "you")
    .replace(/\bur\b/g, "your")
    .replace(/[^\w\s]/g, "")
    .trim();
