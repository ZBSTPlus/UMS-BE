const mongoose=require("mongoose");

const Practice = new mongoose.Schema(
  {  courseId:{
        type:String
     },
     courseName:{
      type:String,
      required:true
     },
     topicId:{
        type:String
     },
     topicName:{
        type:String,
        required:true
     },
     questions:[
        {
          qId:{
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