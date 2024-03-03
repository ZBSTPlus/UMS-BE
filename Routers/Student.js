const express=require("express");
const router=express.Router();
const StudentController=require("../Controllers/StudentController")

/**
 * @openapi
 * /student/studentDetails:
 *   get:
 *     description: GET Student details!
 *     tags: [ Student ]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/studentDetails',StudentController.details)
//router.get('/classrooms',StudentController.classrooms)

/**
 * @openapi
 * /student/classrooms:
 *   post:
 *     description: CReate New CLassroom
 *     tags: [ Student ]
 *     parameters:
 *       - name: testparam1
 *         in: path
 *         required: true
 *         type: string
 *       - name: sampleparam2
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/classrooms',StudentController.post_details)
//router.get('/classrooms/practice?')


router.get('/quiz/getquestions',StudentController.getQuizQuestions)


router.post('/quiz/addquestions',StudentController.addQuizQuestions)



router.get('/practice/getquestions',StudentController.getPracticeQuestions)



router.post('/practice/addquestions',StudentController.addPracticeQuestions)

router.get('/assessment/:course',StudentController.getAssessment);

router.post('/assessment/updateScore',StudentController.updateStudentScore);
module.exports=router