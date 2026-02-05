import createMember from "./src/member.js";
import createBook from "./src/bookfn.js";
import { borrowRecord, displaySummary } from "./src/borrowRecord.js";

console.log(createMember("Shashank", "Gold"));

const books = [
  { bookId: 1, title: "JS Basics", author: "John Doe", price: 300 },
  { bookId: 2, title: "Node Guide", author: "Jane Smith", price: 400 }
];

console.log(borrowRecord("Shashank", books));
console.log(displaySummary("Shashank", 500));