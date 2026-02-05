import fs from "fs";

export default function createBook(name, title, author, price) {
    try {
        let data = JSON.parse(fs.readFileSync("library.json", "utf-8"));

        let bookObj = {
            bookId: new Date(),
            title,
            author,
            price
        };

        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                data[i].books.push(bookObj);
            }
        }

        fs.writeFileSync("library.json", JSON.stringify(data, null, 2));
        return "Book added";
    } catch (err) {
        console.log(err);
    }
}