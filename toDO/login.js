import fs from 'fs';
function loginUser(name, password) {
    try {
        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
            let user = data.some((value) => value.name === name && value.password === password);
            if (user) {
                return "Login Successful";
            } else {
                return "Invalid Credentials";
            }
        } else {
            return "No users registered";
        }
    } catch (err) {
        console.log(err);
    }
} export default loginUser;





