import {asyncHandler} from "../utiles/asyncHandler.js";
import { Router } from "express";
import registerUser from "../controllers/user.controller.js"; 
const registerUser = asyncHandler( async(req,res)=>{
    res.status(200) .json({
        message : "ok"
    })
})
export default registerUser