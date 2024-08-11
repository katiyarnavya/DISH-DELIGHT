import express from "express"
import { sendReservation } from "../controller/reserve.js";

const router = express.Router();
router.post('/send', sendReservation);


export default router;