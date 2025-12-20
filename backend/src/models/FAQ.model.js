import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },

    tags: [String],
  },
  { timestamps: true }
);

const faqModel = mongoose.model("faq", faqSchema);
export default faqModel;
