import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/database.js";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();

const app = express();
(async() =>{
    await db.sync();
})();

app.use(session({
    secret : process.env.SESS_SECRET,
    resave : false,
    saveUninitialized: true,
    cookie : {
        secure : 'auto'
    }

}));
app.use(cors({
    credentials : true,
    origin :'http://localhost:3000'
}));
app.use(express.json());
//middleware
app.use(UserRoute)


app.listen(process.env.PORT, ()=> {
    console.log('Server up and running');
});