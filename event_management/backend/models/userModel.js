import mongoose from "mongoose"

// schema for users 
const userSchema = mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   age: { type: Number, required: true },
   gender:{type:String,enum:["Male,Female"]},
   course:{type:String,enum:["B.Tech,BBA,MBA"]},
   profilePic:{type:String}
}, { timestamps: true } 
)

// model for schema 
const userModel = mongoose.model("users", userSchema)
export default userModel

