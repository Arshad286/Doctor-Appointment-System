import userModel from "../models/user-model.js";

export const authController = async (req, res) => {
  try {
    const user = await userModel.findById({
      _id: req.body.userId,
    });

    if (!user) {
      return res.status(404).send({
        message: "User not Found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Authorization Error",
      success: false,
    });
  }
};
