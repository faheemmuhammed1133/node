import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect("mongodb://localhost:27017/planetcrud")
    .then(()=>{
        console.log("DB is connected")
    })
    .catch((err)=>{
        console.log(err)
    })

}