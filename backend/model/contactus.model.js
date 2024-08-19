import mongoose from "mongoose";

const InquirySchema = mongoose.Schema({
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
const Inquiry = mongoose.model("Inquiry", InquirySchema);
export default Inquiry;