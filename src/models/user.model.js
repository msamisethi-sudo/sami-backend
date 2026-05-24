import mongoose, {Schema, SchemaType} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    userName :{
type : String,
required :true,
unique : true,
loewrcase: true,
trim:true,
index:true

    },

email :{
type : String,
required :true,
unique : true,
loewrcase: true,
trim:true,


    },
    

fullname :{
type : String,
required :true,
trim:true,
index :true
    },

    avatar :{
type : String, //cloudnery  url
required :true

 },
coverImage:{
type:String,

},
watchHistory :[
    {
        type: Schema.Types.objectID,
        ref : "video"
    }

],

password : {
 type : String,     
 required :[true,"password is required"]
},

    refreshToken:{
        type :String
    }

},{timestamps:true}





)
// encrypting password
userSchema.pre("save",async function(next){
    if(!this.Modified("password")) return next()
this.password = bcrypt.hash(this.password,10)
next()
}

)
// checking pasword is correct or not from user
userSchema.methods.isPasswordCorrect = async function (password) {
 return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAcessToken = function(){
return Jwt.sign({
        _id :this._id,
       email: this.email,
       userName : this.userName ,
       fullname : this.fullname,
    },

process.env.ACCESS_TOKEN_SECRET,
{
    expiredIn : process.env.ACCESS_TOKEN_EXPIRY
}

)
}
userSchema.methods.generateRefreshToken = function(){
    return Jwt.sign({
        _id :this._id,
     
    },

process.env.REFRESH_TOKEN_SECTRET,
{
    expiredIn : process.env.REFRESH_TOKEN_EXPIRY
}

)
}


export const User = mongoose.model("User",userSchema)