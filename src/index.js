// // require('dotenv').config({path:'./env'})
// // another way is module like way 
// import dotenv from "dotenv"
// dotenv.config({path:'./env'})
// // import mongoose from "mongoose"
// // import { db_name } from "./constants"
// import express from "express"

// const app = express()
// import connect_db from "./db/db.js"
// connect_db()
// // promise returns 
// .then(()=>{
//     app.listen(process.env.PORT,()=>{
//  console.log(`server is running at port${process.env.PORT}`)
//  app.on("error",(error)=>{
// console.log("express connection error",error)
//  })
//     })
// })
// .catch((error)=>{
// console.log("mongo db connection  error !!",error)
// })

// import expresss from "express"
// const app = express()
// async function connect_db (){
//     try{

// await mongoose.connect(`${process.env.MONGO_url}/${db_name}`)
// app.on('error',(error)=>{
//     console.log("error",error)
// })
//    app.listen(process.env.PORT,()=>{
//     console.log(`process is completed ${process.env.PORT}`)
//    })
// }
// catch(error){
//  console.log(error)
//     }
    
// }

// connect_db()













import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
dotenv.config({path:'./env'})

// app.use(cookieParser())
// 1. IMPORT the configured app from your app.js file
import { app } from "./app.js" 

import connect_db from "./db/db.js"

// 2. REMOVE this line completely: const app = express() 
// (It was overwriting your routes!)

connect_db()
.then(()=>{
    // Add a fallback port (like 8000) in case process.env.PORT is undefined
    const port = process.env.PORT || 8000;
    
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`)
    })

    app.on("error", (error) => {
        console.log("express connection error", error)
    })
})
.catch((error)=>{
    console.log("mongo db connection error !!", error)
})

app.use("/api/v1/users",userRouter)