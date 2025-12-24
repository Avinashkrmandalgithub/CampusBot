import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    avatar: String,

    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
