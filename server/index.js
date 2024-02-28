import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import expressAsyncHandler from "express-async-handler";
import User from "./models/userModel.js";

mongoose
  .connect(process.env.MongoPort)
  .then(() => {
    console.log("COnnected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes

// post data
app.post(
  "/authDataPost",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      EmployeeName: req.body.EmployeeName,
      EmployeeId: req.body.EmployeeId,
      EmployeePhoneNumber: req.body.EmployeePhoneNumber,
      EmployeeEmail: req.body.EmployeeEmail,
      EmployeeBloodGroup: req.body.EmployeeBloodGroup,
    });

    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      message: "User Added",
    });
  })
);

// get data
app.get(
  "/authDataGet",
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({});
    res.send(user);
  })
);

// get data based on id
app.get(
  "/authDataGet/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
