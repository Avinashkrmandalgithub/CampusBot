import mongose from "mongoose";

const faqSchema = new mongose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const faqModel = mongose.model("FAQ", faqSchema);
export default faqModel;
