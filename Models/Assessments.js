const mongoose=require("mongoose");

const assessment = new mongoose.Schema(
   {
      courseId:{
         type:String,
         unique:true
      },
      courseName:{
         type:String,
      },
      assessmentName:{
        type:String,
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
        ],
        scores:[
            {
            studentId:{
            type:String,
            required:true,
            unique:true
            },
            assessmentScore:{
                type:String
            }
         }
    ]
      }
);
const Assessment=mongoose.model("Assessment",assessment);
module.exports=Assessment;
