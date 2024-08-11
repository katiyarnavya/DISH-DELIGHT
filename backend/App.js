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
    origin: ["http://localhost:5173"],
    method:['POST'],
    credentials: true
}))

App.use(express.json());
App.use(express.urlencoded({extended: true}))
App.use('/api/v1/reservation',reservation)

dbConnection();
App.use(errorMiddleware)
export default App;

