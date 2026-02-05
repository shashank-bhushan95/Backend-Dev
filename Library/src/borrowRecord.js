import fs from "fs";

export function borrowRecord(memberName, books) {
    try {
        let data = JSON.parse(fs.readFileSync("library.json", "utf-8"));

        for (let i = 0; i < data.length; i++) {
            if (data[i].name === memberName) {
                data[i].books = books;
            }
        }

        fs.writeFileSync("library.json", JSON.stringify(data, null, 2));
        return "Books borrowed";
    } catch (err) {
        console.log(err);
    }
}

export function displaySummary(memberName, fine) {
    let data = JSON.parse(fs.readFileSync("library.json", "utf-8"));

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === memberName) {
            let total = 0;
            data[i].books.forEach(b => total += b.price);

            let finalFine = fine;
            if (data[i].membershipType === "Normal") finalFine *= 0.95;
            if (data[i].membershipType === "Gold") finalFine *= 0.85;

            return {
                member: data[i].name,
                books: data[i].books,
                totalBookValue: total,
                fineAfterDiscount: finalFine
            };
        }
    }
}