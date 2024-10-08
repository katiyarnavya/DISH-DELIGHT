import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './dbConnection/dbConnection.js'
import { errorMiddleware } from "./error/error.js";
import reservation  from './routes/reservation.js'
// import process from './config/config.env'

const App = express();
dotenv.config({path: './config/config.env'})
// const corsOpts = {
//     origin: '*',
  
//     methods: [
//       'GET',
//       'POST',
//     ],
  
//     allowedHeaders: [
//       'Content-Type',
//     ],
//     credentials: true
//   };
  
// App.use(cors(corsOpts));
App.use(cors({
    origin: [true],
    method:['POST'],
    credentials: true
}))

App.use(express.json());
App.use(express.urlencoded({extended: true}))
App.use('/api/v1/reservation',reservation)

App.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    massage: "Hello World",
    
})})

dbConnection();
App.use(errorMiddleware)
export default App;

