const mongoose=require("mongoose");

const student = new mongoose.Schema(
  {
     studentId:{
       type:String,
       required:true,
       unique: true
     },
     studentName:{
        type:String,
        required:true
     },
     studentEmail:
     {
      type:String,
      required:true
     },
     courses:[
      {
        courseId:
        {
          type:String,
          required:true
        },
        courseName:{
          type:String,
          required:true
        }
      }
     ]   
}
  
);
const Student=mongoose.model("Student",student);
module.exports=Student;
