import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true },
    rating: { type: Number, required: true},
    price: { type: Number, required: true}
});

export default mongoose.model("Post", Post);
