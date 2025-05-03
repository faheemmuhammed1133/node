import express from 'express';
import connectDb from "./dbConnection.js"
import userRouter from './controllers/userController.js'
import eventRouter from './controllers/eventController.js'
import newsRouter from './controllers/newsController.js'


const app = express();
connectDb()
app.use(express.json())
app.use("/user",userRouter)
app.use("/events",eventRouter)
app.use("/news",newsRouter)



app.listen(8000, () => {
   console.log("server is up and running");
})
app.get("/health", (req, res) => {
   res.send({ message: "server up" })
})