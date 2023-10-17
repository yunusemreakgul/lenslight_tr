import mongoose from "mongoose";

const connectionString = "mongodb+srv://root:root123@cluster0.evftm81.mongodb.net/?retryWrites=true&w=majority"

const conn = () => {
    mongoose.connect( connectionString, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then( () => {
        console.log("Bağlandı");
    })
    .catch( (err) => {
        console.log(err);
    })
}


export default conn;