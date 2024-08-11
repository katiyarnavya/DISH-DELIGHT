import App from "./App.js";
import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });

App.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on POrt ${process.env.PORT}`)
});
