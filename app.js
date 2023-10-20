import  express  from "express";
import dotenv from "dotenv";

import conn from "./db.js";
import pageRoute from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';
// import userRoute from './routes/userRoute.js';

conn();

dotenv.config();

const app=express();
const port = 3001;

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/photos', photoRoute);
app.use('/', pageRoute);
// app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Bağlandı ${port}`)
})