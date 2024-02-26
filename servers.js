const express = require('express');
const mongoose = require('mongoose');
const Student = require("./Models/Student")
const Practice = require("./Models/Practice")
const Quiz = require("./Models/Quiz")
const ClassRoom = require("./Models/ClassRooms")
const studentRoutes = require("./Routers/Student")
const cors = require('cors');
const swagger = require('./swagger')

require('dotenv').config()
const app = express();
app.use(express.json());
let corsOptions = {
  origin: ['http://localhost:5173'],
}
app.use(cors(corsOptions))


// app.use(express.urlencoded({extended:true}))


//DataBase Connection
const uri = process.env.MONGO_URI
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    swagger(app)
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use("/student", studentRoutes);

app.post("/insert", (req, res) => {
  const data = new Student(req.body);
  data.save().then((result) => {
    console.log("result:", result);
    res.send(result);
  })
    .catch((error) => {
      res.send(error);
    })
})

//zetabyt