import userModel from "../models/user-model.js"
import bcrypt from 'bcrypt'

export const loginController = () => {

}

export const SignupController = async (req, res) => {

    try{

        const existingUser = await userModel.findOne({
            email: req.body.email
        });

        if(existingUser){
            return res.status(200).send({
                message: "User Already exist ",
                success: false
            });
        }

        const { password, ...otherDetails } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser  = new userModel({
            ...otherDetails,
            password: hashedPassword
        });
        await newUser.save();

        res.status(200).send({
            message: "Registration successfull"
        })


    }catch(e){
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}

