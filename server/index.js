import express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

// const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.mi19gil.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use("/api", router);

router.put("/api/posts/:id", async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
    });
    const db = client.db();
    const collection = db.collection("test");

    const id = req.params.id;
    const data = req.body;

    await collection.updateOne({ _id: id }, { $set: data });

    res.send("Item updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
async function startApp() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB_URL);

    app.listen(PORT, () =>
      console.log("start workin' on port " + PORT + " and connected to DB")
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
