import mongoose from "mongoose";
import { db_name} from "../constants.js";
// import express from "express"
// const app = express()

const connect_db = async () =>{
try {
    const connection = await mongoose.connect(`${process.env.MONGO_URL}/${db_name}`)
    console.log(`\n process completed${connection.connection.host}`)
//     app.on('error',(error)=>{
// console.log("error",error)
// throw error
    // })
    // app.listen(connection,()=>{
    //     console.log("process completed",connection)
    // })

} catch (error) {
    console.log("ERROR in db:",error)
    process.exit(1)
}
}

export default connect_db;