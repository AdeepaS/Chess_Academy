// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("ChessAcademy");

// Find a document in a collection.
db.getCollection("coaches").insertOne({
    name : "Kaveen" ,
    age : "30" ,
    rating : "1460"
});
