const mongoose=require("mongoose");

const courses = new mongoose.Schema(
  {
    courseId:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    topics:[
        {
            topicId:{
                type:String,
                required:true
            },
            topicName:{
                type:String,
                required:true
            }
        }
    ]
}

   
  
);
const Courses=mongoose.model("Courses",courses);
module.exports=Courses;
