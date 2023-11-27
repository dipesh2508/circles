import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { types: String, required: true },
  username: { types: String, required: true, unique: true },
  name: { types: String, required: true },
  image: String,
  bio: String,
  threads: [{ types: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [{ types: mongoose.Schema.Types.ObjectId, ref: "Community" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;