import mongoose from "mongoose";

const newsSchema=mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true}
});

const newsModel=mongoose.model("news",newsSchema)