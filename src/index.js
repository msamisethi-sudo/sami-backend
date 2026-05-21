// require('dotenv').config({path:'./env'})
// another way is module like way 
import dotenv from "dotenv"
dotenv.config({path:'./env'})
// import mongoose from "mongoose"
// import { db_name } from "./constants"

import connect_db from "./db/db.js"
connect_db()
// promise returns 
.then(()=>{
    app.listen(process.env.MONGO_URL,()=>{
 console.log(`server is running at port${process.env.PORT}`)
 app.on("error",(error)=>{
console.log("express connection error",error)
 })
    })
})
.catch((error)=>{
console.log("mongo db connection  error !!",error)
})

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
