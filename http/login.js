import fs from "fs";
import { StatusCode }  from "http";
function login(req, res) {
  let { email, password } = req.body;

  try {
    if (fs.existsSync("user.json")) {
      let users = JSON.parse(fs.readFileSync("user.json", "utf-8"));

      let isUser = users.find(
        value => value.email === email && value.password === password
      );

      if (isUser) {
        res.send("login successful");
        return;
      } else {
        res.send("invalid email or password");
        return;
      }
    } else {
      res.send("no users found");
    }

  } catch (err) {
    console.log(err);
  }
}

export default login;