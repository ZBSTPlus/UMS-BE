const mongoose=require("mongoose");

const student = new mongoose.Schema(
  {
     sid:{
       type:String,
       required:true
     },
     sname:{
        type:String,
        required:true
     },
     email:
     {
      type:String,
      required:true
     },
     courses:[
      {
        cid:
        {
          type:String,
          required:true
        },
        cname:{
          type:String,
          required:true
        }
      }
     ]   
}
  
);
const Student=mongoose.model("Student",student);
module.exports=Student;
