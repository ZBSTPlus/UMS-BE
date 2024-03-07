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




/**
 * @openapi
 * /quiz/getquestions:
 *   get:
 *     summary: Get quiz questions by courseName and topicName
 *     description: Retrieve quiz questions based on the specified courseName and topicName.
 *     parameters:
 *       - in: query
 *         name: courseName
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the course for which to retrieve quiz questions.
 *       - in: query
 *         name: topicName
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the topic for which to retrieve quiz questions.
 *     responses:
 *       '200':
 *         description: A list of quiz questions matching the specified courseTitle and topicTitle.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/QuizObject'
 *       '500':
 *         description: Internal server error
 */

router.get('/quiz/getquestions',StudentController.getQuizQuestions)


router.post('/quiz/addquestions',StudentController.addQuizQuestions)



router.get('/practice/getquestions',StudentController.getPracticeQuestions)



router.post('/practice/addquestions',StudentController.addPracticeQuestions)

router.get('/assessment/:course',StudentController.getAssessment);

router.post('/assessment/updateScore',StudentController.updateStudentScore);
module.exports=router