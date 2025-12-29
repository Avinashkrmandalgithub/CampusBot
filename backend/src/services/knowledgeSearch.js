import faqModel from "../models/FAQ.model.js";
import newsModel from "../models/News.model.js";
import eventModel from "../models/Event.model.js";
import UniversityInfo from "../models/UniversityInfo.model.js";
import { scoreMatch } from "../utils/scoring.js";
import { expandWords } from "../utils/synonyms.js";

const WEIGHTS = {
  faq: 3,
  university: 2.5,
  event: 1.5,
  news: 1,
};

export const searchKnowledgeBase = async (words, intent) => {
  const results = [];
  const enrichedWords = expandWords(words);

  /* ========= FAQs ========= */
  const faqs = await faqModel.find();
  faqs.forEach((faq) => {
    const score = scoreMatch(
      `${faq.question} ${faq.answer} ${faq.tags.join(" ")}`,
      enrichedWords
    );

    if (score > 0) {
      results.push({
        type: "faq",
        score: score * WEIGHTS.faq,
        reply: faq.answer,
      });
    }
  });

  /* ========= University Info ========= */
  const universityInfo = await UniversityInfo.find();
  universityInfo.forEach((info) => {
    const score = scoreMatch(`${info.title} ${info.content}`, enrichedWords);

    if (score > 0) {
      results.push({
        type: "university",
        score: score * WEIGHTS.university,
        reply: `${info.title}\n${info.content}`,
        sourceUrl: info.sourceUrl,
      });
    }
  });

  /* ========= Events ========= */
  const events = await eventModel.find();
  events.forEach((event) => {
    const score = scoreMatch(`${event.title} ${event.location}`, enrichedWords);

    if (score > 0) {
      results.push({
        type: "event",
        score: score * WEIGHTS.event,
        reply: `${event.title}
             📍 ${event.location}
             📅 ${event.date.toDateString()} ⏰ ${event.time}`,
      });
    }
  });

  /* ========= News ========= */
  const newsList = await newsModel.find();
  newsList.forEach((news) => {
    const score = scoreMatch(`${news.title} ${news.desc}`, enrichedWords);

    if (score > 0) {
      results.push({
        type: "news",
        score: score * WEIGHTS.news,
        reply: `${news.title}\n${news.desc}`,
      });
    }
  });

  return results.sort((a, b) => b.score - a.score);
};
