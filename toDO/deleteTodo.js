import fs from 'fs'

function createTodo(name ,task) {
    try {
        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
            for(let i=0;i<data.length;i++){
                if(data[i].name===name){
                    data[i].todo.push(ob);
                    //delete data[i].todo.pop();
                }
            }
                    fs.writeFileSync("todo.json",JSON.stringify(data,null,2));
                    return "Todo Created";
                }
    } catch (error) {
        console.log(error);
    }
}