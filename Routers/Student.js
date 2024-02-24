const express=require("express");
const router=express.Router();
const StudentController=require("../Controllers/StudentController")

router.get('/studentDetails',StudentController.details)
//router.get('/classrooms',StudentController.classrooms)
router.post('/classrooms',StudentController.post_details)
//router.get('/classrooms/practice?')

module.exports=router