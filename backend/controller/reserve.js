import ErrorHandler from "../error/error.js";
import { reservation } from "../models/reservationSchema.js";

export const sendReservation = async(req, res, next) =>{
    const {firstName, lastName, email, phoneNo, time, date} = req.body;
    if(!firstName|| !lastName|| !email|| !phoneNo|| !time|| !date){
        console.log(firstName, lastName, email, phoneNo, time, date);
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }
    try {
        await reservation.create({firstName, lastName, email, phoneNo, time, date});
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully"

        })
    } catch (error) {
        if(error.name === "ValidationError"){
            const ValidationError = Object.values(error.errors).map((err)=>err.message);
            return next(new ErrorHandler(ValidationError.join(', '), 400));
        }
        return next(error)
    }
}
