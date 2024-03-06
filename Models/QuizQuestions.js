const mongoose=require("mongoose");




/**
 * @openapi
 * components:
 *   schemas:
 *     QuizQuestion:
 *       type: object
 *       properties:
 *         qid:
 *           type: string
 *           example: "1"
 *         question:
 *           type: string
 *           example: "What is 2 * 3?"
 *         options:
 *           type: array
 *           items:
 *             type: string
 *           example: ["4", "5", "6", "7"]
 *         correctAnswer:
 *           type: string
 *           example: "6"
 *     QuizObject:
 *       type: object
 *       properties:
 *         course_title:
 *           type: string
 *           example: "mathematics"
 *         topic_title:
 *           type: string
 *           example: "multiplication"
 *         questions:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/QuizQuestion'
 */

const Quiz = new mongoose.Schema(
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
const quiz=mongoose.model("quiz",Quiz);
module.exports=quiz;
