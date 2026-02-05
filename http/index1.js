import express from 'express';
import mid from './mid.js';
import res from './res.js';
import login from './login.js';

let app = express();
let port = 8000;
app.use(express.json());

app.get("/home", mid , (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log("connected");
});
