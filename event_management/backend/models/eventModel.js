import mongoose from "mongoose"

// schema for users 
const eventSchema = mongoose.Schema({
   name: { type: String, required: true },
   author: { type: String, required: true },
   location: {
      type: "Point",
      coordinates: [,]
   },
   startAt:{type:Date,required: true},
   endingOn:{type:Date,required: true},
   imageUrl:{type:String}
}, { timestamps: true } 
)

// model for schema 
const userModel = mongoose.model("events", userSchema)
export default userModel

