
const Student = require("../Models/Student")
const Courses = require("../Models/Courses")
const Practice = require("../Models/Practice");
const { json } = require("express");


const details = (req, res) => {
    
    const Id=req.params.studentId;
    console.log(Id);
    Student.find({studentId:Id})
        .then((result) => {
            if (result!=0) {
                
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
const getCourse=(req,res)=>
{
    const course=req.params.courses;
    Courses.find({courseName:course})
    .then((result)=>
    {
       if(result!=0)
       {
        res.status(200).send(result)
       }
       else
       {
        res.status(404).send("No course occure");
       }
    }).catch((error)=>
    {
        res.status(500).send(error)
    })
    
}
// const practice = (req, res) => {
//     const id = req.params.id;
//     Practice.findOne({ tid: id })
//         .then((result) => {
//             if (result) {
//                 res.status(200).send(result)
//             }
//             else {
//                 res.status(500).send("can't find the doc");
//             }
//         })
//         .catch((error) => {
//             res.status(500).send(error);
//         });
// }

// const post_details = (req, res) => {
//     let array = req.body;
//     let array2 = [];
//     let array3 = array.courses;
//     //console.log(array3,typeof array3);

//     // Map each element of array to a promise returned by Classrooms.find()
//     const promises = array3.map(el => {
//         return Classrooms.find({ id: el.cid, title: el.cname })
//             .then(result => {
//                 if (result) {
//                     console.log(result[0]);
//                     array2.push(result[0]);
//                 } else {
//                     throw new Error("Can't find the doc!");
//                 }
//             })
//             .catch(err => {
//                 throw err;
//             });
//     });

//     Wait for all promises to resolve
//     Promise.all(promises)
//         .then(() => {
//             console.log("in promise:", array2);
//             res.send(array2);
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err.message);
//         });
// }

// const quiz = (req, res) => {
//     const id = req.params.id;
//     Practice.findOne({ tid: id })
//         .then((result) => {
//             if (result) {
//                 res.status(200).send(result)
//             }
//             else {
//                 res.status(500).send("can't find the doc");
//             }
//         })
//         .catch((error) => {
//             res.status(500).send(error);
//         });
// }

module.exports = { details,getCourse }