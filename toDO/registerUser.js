import fs from 'fs';
function registerUser(name,email, password) {
    try{
        let user = [];
        let ob={
            id : new Date(),name,email,password,todo:[],
        }
        if(fs.existsSync("todo.json")){
            let data = JSON.parse( fs.readFileSync("todo.json","utf-8"));
            let isUser = data.some((value) => value.name === name );
            if(isUser){
                return "User exists";
            }
            user = data;
        }
        user.push(ob);
        fs.writeFileSync("todo.json",JSON.stringify(user,null,2));
        console.log("User Create ");
        
    }
    catch(err){
        console.log(err);
    }
}export default registerUser;