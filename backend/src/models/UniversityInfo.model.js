import mongoose from "mongoose";

const universityInfoSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sourceUrl: {
      type: String,
      default: "https://www.brainwareuniversity.ac.in/",
    },
  },
  { timestamps: true }
);

const UniversityModel = mongoose.model("UniversityInfo", universityInfoSchema);
export default UniversityModel;
