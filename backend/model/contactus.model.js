import mongoose from "mongoose";

const contactusSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
});
const Contactus = mongoose.model("Contactus", contactusSchema);
export default Contactus;