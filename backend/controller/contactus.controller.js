import Inquiry from "../model/contactus.model.js";
import bcryptjs from "bcryptjs";
export const Inquiry = async(req, res) => {
    try {
        const { name, email, message } = req.body;

        const Inquiry = new Inquiry({
            name: name,
            email: email,
            message: message,
        });
        await createdInquiry.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdInquiry._id,
                name: createdInquiry.name,
                email: createdInquiry.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};