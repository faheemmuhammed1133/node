import mongoose from "mongoose";

export default function connnectDB() {
   mongoose.connect("mongodb://localhost:27017/event_ms")
      .then(() => {
         console.log("db conected")
      })
      .catch((err) => {
         console.log("error connecting ")
      })
}