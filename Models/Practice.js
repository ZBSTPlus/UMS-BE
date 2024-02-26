const mongoose=require("mongoose");

const practice = new mongoose.Schema(
   {
      courseId:{
         type:String,
      },
      courseName:{
         type:String,
      },
        topicId:{
          type:String,
          required:true
        },
        topicName:{
           type:String,
           required:true
        },
        questions:[
           {
             questionId:{
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
const Practice=mongoose.model("Practice",practice);
module.exports=Practice;
