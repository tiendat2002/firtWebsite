import express from "express";
import bodyParser from "body-parser";
//query parameters
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from "dotenv";
dotenv.config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


viewEngine(app);
initWebRoutes(app);


let port = process.env.PORT || 3333;
//Port equal undefined then port equal 3333

app.listen(port,()=>{
    console.log("Backend Nodejs is running on port: "+port);
})