const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require("cors")
const port = 3000
const pasword = "abcdefgh"
const uri = `mongodb+srv://paste:${pasword}@cluster0.t4j9fwn.mongodb.net/?retryWrites=true&w=majority`;
/*app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected!'));

*/
app.use(cors())

/*app.use((req, res, next) => 
{
    console.log('heyyy');
    next();
});
app.use((req, res, next) => 
{
    console.log('hoyy')
    next();
});
const logShema = new mongoose.Schema(
{
    email: String,
    password : String
})
const abc = mongoose.model("abcd", logShema)
const compte = new abc({name: "ben", password : "hjhbj"})
compte.save().then(() => console.log('register'))
app.post("/api/auth/signup", (req, res) => 
{
    console.log("register", req.body);
    res.send("you are register")
    res.status(203)
});
app.post("/api/auth/login", (req, res) => 
{
    console.log("log", req.body);
    const log = req.body;
    res.send("you are log")
});*/
const userShema = new mongoose.Schema(
{
    email: { type: String, required: true, unique: true},
    password: {type: String, required : true}
});
const User = mongoose.model("User", userShema);
const newUser = new User({email: "abc@gmail.com", password : "hjhbj"});
newUser.save((error) =>
{
    if(error)
        console.log(error)
    else
        console.log("Genial")
})
app.get("/", (req, res) => res.send("Hello"))
app.listen(process.env.port || port, () =>console.log("Listening on port " + port))
