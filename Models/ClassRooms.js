const mongoose=require("mongoose");

const ClassRooms = new mongoose.Schema(
  {
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    units:[
        {
            id:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        }
    ]
}

   
  
);
const classRooms=mongoose.model("classRooms",ClassRooms);
module.exports=classRooms;
