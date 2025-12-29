export const expandWords = (words) => {
  const synonyms = {
    library: ["books", "journals", "reading", "study", "resources", "facilities"],
    facilities: ["services", "amenities", "available", "provide"],
    fees: ["payment", "charges", "cost", "amount"],
    exam: ["tests", "assessment", "evaluation"],
    placement: ["job", "career", "recruitment"],
    hostel: ["accommodation", "rooms", "mess"],
    admission: ["apply", "application", "eligibility"],
  };

  const expanded = new Set(words);

  words.forEach((word) => {
    synonyms[word]?.forEach((syn) => expanded.add(syn));
  });

  return [...expanded];
};
