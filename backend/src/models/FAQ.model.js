import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Exams", "Fees", "Admissions", "Hostel", "Library", "General"],
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const faqModel = mongoose.model("FAQ", faqSchema);
export default faqModel;
