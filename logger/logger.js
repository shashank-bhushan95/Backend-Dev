import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const loggerFolder = path.join(dirName);
const loggerFile = path.join(loggerFolder, "logger.txt");

function logger(type,message){
    try{
        if(!fs.existsSync(loggerFolder)){
            fs.mkdirSync(loggerFolder, {recursive: true});
        }

        const log = `[${new Date()} ${type}: ${message}]\n`;
        fs.appendFileSync(loggerFile, log);

    }
    catch(err){
        console.error("Logger Error: ", err);
    }
}

export default logger;