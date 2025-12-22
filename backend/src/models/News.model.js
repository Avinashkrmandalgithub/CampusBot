import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    desc: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Exam", "Holiday", "Notice", "Admission", "General"],
    },

    date: {
      type: Date,
      required: true,
    },

    highlight: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const newsModel = mongoose.model("News", newsSchema);
export default newsModel;
