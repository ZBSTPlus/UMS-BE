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

module.exports=router