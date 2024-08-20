import Contactus from "../model/contactus.model.js";

export const contactus = async(req, res) => {
    try {
        const { name, email, message } = req.body;
        const createdContactus = new Contactus({
            name: name,
            email: email,
            message: message,
        });
        await createdContactus.save();
        res.status(201).json({
            message: "Form submitted",
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};