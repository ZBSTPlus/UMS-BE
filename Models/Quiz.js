const mongoose=require("mongoose");

const Quiz = new mongoose.Schema(
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
const quiz=mongoose.model("quiz",Quiz);
module.exports=quiz;
