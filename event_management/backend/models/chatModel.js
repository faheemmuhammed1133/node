import mongoose from "mongoose";

const chatSchema=mongoose.Schema({
   sender:{type:String,required:true},
   club:{type:String,required:true}
});

const chatModel=mongoose.model("news",chatSchema)