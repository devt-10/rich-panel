import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cateory: {
    type: String,
    enum: ["FB Comment", "FB Post", "FB Message", "FB Page"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
