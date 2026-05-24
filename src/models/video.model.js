import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
videoFile : {
 type :String, // cloudnery 
 required : true

},

thumbnail : {
 type :String, // cloudnery 
 required : true
 
},

title : {
 type :String, 
 required : true
 
},

distription : {
 type :String,
 required : true
 
},

 duration: {
 type :String, // cloudnery  url
 required : true
 
},
ispublished : {
    type : Boolean,
    default : true

},
owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
}






},
{
    timestamps:true
}
)

videoSchema.plugin(mongooseAggregatePaginate)
export const  Video = mongoose.model("Video",videoSchema)