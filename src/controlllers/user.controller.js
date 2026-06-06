import {asyncHandler} from "../utiles/asyncHandler.js";
import {api_error} from "../utiles/api_error.js"
import {User} from "../models/user.model.js"
import {uploadoncloudnery} from "../utiles/cloudnary.js"
import { api_responce } from "../utiles/api_response.js";
const registerUser = asyncHandler( async(req,res)=>{
   // get user details from frontend 
   // validation  - not empty
   // check if user already exists  : check by username and also by userid of email
   // check for images , check for avatar 
   // apload them to cloudnary  , check avatar again on cloudnary
   // create uswer object - db calls 
   // remove password and refresh tokens fields  from response
   // check response for user creation 
   //  return response






 const {userName,fullname,email,password} = req.body


console.log("email",email)
// chek if any field is empty or not 

 if ([userName,fullname,email,password].some((field)=>{
  return field?.trim()===""
 })){
  throw new  api_error(400,"username is required")
 }

//  check if user already exists or not 
const existedUser = User.findOne({
  $or : []
})

if(existedUser){
  throw new api_error(409, "ALREADY USER EXISTS")
}
// get local paths where images will store for some moment 
const avatarLocalpath = req.files?.avatar[0]?.path

const coverimagelocalpath = req.files?.coverimage[0]?.path

// check avatar exists in your local storage
if (!avatarLocalpath){
  throw new api_error(400, "avatar image is required")
}
// now upload  images on cludnery 

const avatar = await uploadoncloudnery(avatarLocalpath)
const coverimage = await uploadoncloudnery(coverimagelocalpath)

// check avatar uploaded on cloudnery or not 
if(!avatar) {
  throw new api_error(500, "could not uplaod avatar image on cloudnery")
}

// if all conditions check than get a new user data 
const user = await User.create({
  fullname,
  avatar : avatar.url,
  coverimage : coverimage?.url||"",
  email,
  userName : userName.toLowerCase()
})

//  again check is new user really created ot not 

const userCreated = User.findById(user._id).select(
  "-paasword -refreshToken"
)

if(!userCreated) {
  throw new api_error(500, "sorry server issue ,  you could not register , please try again to register ")
}
})
export default registerUser