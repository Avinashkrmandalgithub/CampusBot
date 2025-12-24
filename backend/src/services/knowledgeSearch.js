import faqModel from "../models/FAQ.model.js";
import newsModel from "../models/News.model.js";
import eventModel from "../models/Event.model.js";
import { scoreMatch } from "../utils/scoring.js";

export const searchKnowledgeBase = async (words) => {
  const results = [];

  // FAQs
  const faqs = await faqModel.find();
  faqs.forEach((faq) => {
    const score = scoreMatch(
      `${faq.question} ${faq.answer} ${faq.tags.join(" ")}`,
      words
    );
    if (score > 0) {
      results.push({
        type: "faq",
        score,
        reply: faq.answer,
      });
    }
  });

  // News
  const newsList = await newsModel.find();
  newsList.forEach((news) => {
    const score = scoreMatch(`${news.title} ${news.desc}`, words);
    if (score > 0) {
      results.push({
        type: "news",
        score,
        reply: `${news.title}\n${news.desc}`,
      });
    }
  });

  // Events
  const events = await eventModel.find();
  events.forEach((event) => {
    const score = scoreMatch(`${event.title} ${event.location}`, words);
    if (score > 0) {
      results.push({
        type: "event",
        score,
        reply: `${event.title}
📍 ${event.location}
📅 ${event.date.toDateString()} ⏰ ${event.time}`,
      });
    }
  });

  return results.sort((a, b) => b.score - a.score);
};
