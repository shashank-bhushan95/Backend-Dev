import fs from "fs";

export default function createMember(name, membershipType) {
    try {
        let members = [];

        let memberObj = {
            id: new Date(),
            name,
            membershipType,
            books: []
        };

        if (fs.existsSync("library.json")) {
            members = JSON.parse(fs.readFileSync("library.json", "utf-8"));
        }

        members.push(memberObj);
        fs.writeFileSync("library.json", JSON.stringify(members, null, 2));

        return "Member created";
    } catch (err) {
        console.log(err);
    }
}