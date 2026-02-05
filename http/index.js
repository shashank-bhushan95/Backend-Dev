import express from 'express'
import mid from './mid.js';
import res from './res.js';
import login from './login.js';


let port = 8000;
let app = express();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("  home page  ");
})

app.post("/home", (req, res) => {
    let{id,name} = req.body;
    console.log(id,name);
    res.send(`${id} and ${name}`)
})

app.listen(port, () => {
    console.log("connected");
})