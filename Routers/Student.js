const express=require("express");
const router=express.Router();
const StudentController=require("../Controllers/StudentController")

/**
 * @openapi
 * /student/:studentId:
 *   get:
 *     description: GET Student details!
 *     tags: [ Student ]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/:studentId',StudentController.details)
/**
 * @openapi
 * /student/course/:courses:
 *   post:
 *     description: GET all Courses related to studentId!
 *     tags: [ courses ]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/course/:courses',StudentController.getCourse)

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

//router.get('/classrooms/practice?')




/**
 * @openapi
 * /quiz/getquestions:
 *   get:
 *     summary: Get quiz questions by courseTitle and topicTitle
 *     description: Retrieve quiz questions based on the specified courseTitle and topicTitle.
 *     parameters:
 *       - in: query
 *         name: courseTitle
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the course for which to retrieve quiz questions.
 *       - in: query
 *         name: topicTitle
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