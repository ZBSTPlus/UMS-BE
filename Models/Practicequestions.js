const mongoose=require("mongoose");

const Practice = new mongoose.Schema(
  {  courseId:{
        type:String
     },
     courseTitle:{
      type:String,
      required:true
     },
     topicId:{
        type:String
     },
     topicTitle:{
        type:String,
        required:true
     },
     questions:[
        {
          qid:{
             type:String
          },
          question:
          {
            type:String

          },
         options:{
            type:Array
        },
           
         correctAnswer:{
             type:String 
         }
        }
     ]
   }
  
);
const practice=mongoose.model("practice",Practice);
module.exports=practice;