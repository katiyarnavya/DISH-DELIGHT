import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must contain more than 3 letters"],
        maxLength: [30, "First name must not contain more than 30 characters"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain more than 3 letters"],
        maxLength: [30, "Last name must not contain more than 30 characters"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phoneNo:{
        type: String,
        required: true,
        minLength: [10, "PHONE NO must contain 10 letters"],
        maxLength: [10, "PHONE NO must contain 10 letters"]
    },
    time:{
        type: String,
    },
    date:{
        type: String,
        required: true,
    }


})

export const reservation = mongoose.model("reservation", reservationSchema)