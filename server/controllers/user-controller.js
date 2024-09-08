import userModel from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).send({
      message: "Login Successfully",
      success: true,
      token,
    });

    if (!isMatch) {
      res.status(201).send({
        message: "Invalid email or Password",
        success: false,
      });
    }
  } catch (error) {}
};

export const SignupController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(200).send({
        message: "User Already exist ",
        success: false,
      });
    }

    const { password, ...otherDetails } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      ...otherDetails,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(200).send({
      message: "Registration successfull",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
