
const Student = require("../Models/Student")
const Courses = require("../Models/Courses")
const Practice = require("../Models/Practice")
const Assessment=require("../Models/Assessments")

const details = (req, res) => {
    Student.find({})
        .then((result) => {
            if (result) {
                console.log(result);
                res.status(200).send(result)
            }
            else {
                res.status(500).send("can't find the doc");
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

const courses = (req, res) => {
    Courses.find({})
        .then((result) => {
            if (result) {
                console.log(result);
                res.status(200).send(result)
            }
            else {
                res.status(500).send("can't find the doc");
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

const practice = (req, res) => {
    const id = req.params.id;
    Practice.findOne({ tid: id })
        .then((result) => {
            if (result) {
                res.status(200).send(result)
            }
            else {
                res.status(500).send("can't find the doc");
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

const post_details = (req, res) => {
    let array = req.body;
    let array2 = [];
    let array3 = array.courses;
    //console.log(array3,typeof array3);

    // Map each element of array to a promise returned by Classrooms.find()
    const promises = array3.map(el => {
        return Classrooms.find({ id: el.cid, title: el.cname })
            .then(result => {
                if (result) {
                    console.log(result[0]);
                    array2.push(result[0]);
                } else {
                    throw new Error("Can't find the doc!");
                }
            })
            .catch(err => {
                throw err;
            });
    });

    // Wait for all promises to resolve
    Promise.all(promises)
        .then(() => {
            console.log("in promise:", array2);
            res.send(array2);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}

const quiz = (req, res) => {
    const id = req.params.id;
    Practice.findOne({ tid: id })
        .then((result) => {
            if (result) {
                res.status(200).send(result)
            }
            else {
                res.status(500).send("can't find the doc");
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}




const getQuizQuestions=async (req, res) => {
    try {
      const { courseTitle, topicTitle } = req.query;
      // const { courseTitle, topicTitle } = req.query;
      console.log(courseTitle,topicTitle);
  
      const quizzes = await quiz.find({ courseTitle, topicTitle });
  
      res.json(quizzes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }




  const addQuizQuestions=async (req, res) => {
    try {
      const { courseTitle, topicTitle, questions } = req.body;
  
      const updatedQuiz = await quiz.findOneAndUpdate(
        { courseTitle, topicTitle },
        { $push: { questions: { $each: questions } } },
        { upsert: true, new: true }
      );
  
      res.json(updatedQuiz);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }




  const getPracticeQuestions=async (req, res) => {
    try {
      const { courseTitle, topicTitle } = req.query;
      // const { courseTitle, topicTitle } = req.query;
      console.log(courseTitle,topicTitle);
  
      const practices= await practice.find({ courseTitle, topicTitle });
  
      res.json(practices);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }




const addPracticeQuestions=async (req, res) => {
    try {
      const { courseTitle, topicTitle, questions } = req.body;
  
      const updatedPractice = await practice.findOneAndUpdate(
        { courseTitle, topicTitle },
        { $push: { questions: { $each: questions } } },
        { upsert: true, new: true }
      );
  
      res.json(updatedPractice);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

const getAssessment=async(req,res)=>{
    try{
    const courseName=req.params.course;
    const data=await Assessment.find({courseName}).select('assessmentName questions').exec();
    //console.log(data);
    if(data.length===0){
    return res.json({message:"can't find the assessment!"})
    }
    return res.json(data);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
}

const updateStudentScore=async(req,res)=>{
    try{
    const {courseName,studentId,assessmentScore}=req.body;
    const obj={studentId,assessmentScore};
    const data=await Assessment.findOneAndUpdate(
        {courseName,'scores.studentId': { $ne: studentId }},
        { $addToSet: { scores: obj } },
        { new: true }
        )
        if(data==null || data.length===0)
        return res.json({message:"failed to update the score."})
        return res.json(data);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }

}











module.exports = {
    details, 
    courses, 
    practice, 
    quiz, 
    post_details ,
    getQuizQuestions,
    addQuizQuestions,
    addPracticeQuestions,
    getPracticeQuestions,
    getAssessment,
    updateStudentScore
}