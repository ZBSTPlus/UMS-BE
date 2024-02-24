const mongoose=require("mongoose");

const practice = new mongoose.Schema(
  {
     tid:{
       type:String,
       required:true
     },
     tname:{
        type:String,
        required:true
     },
     questions:[
        {
          qid:{
             type:String,
             required:true
          },
          question:
          {
            type:String,
            required:true
          },
         options:{
            type:Array
        },
           
         correctAnswer:{
             type:String,
             required:true
         }
        }
     ]
   }
  
);
const Practice=mongoose.model("Practice",practice);
module.exports=Practice;
