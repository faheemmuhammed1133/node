import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    distanceFromSunKm: {
      type: Number,
      required: true,
    },
    distanceFromEarthKm: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
  
);

const planetModel = mongoose.model("planets",planetSchema)

export default planetModel