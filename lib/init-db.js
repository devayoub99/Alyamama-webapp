// lib/init-db.js
const Database = require("better-sqlite3");

const db = new Database("insurance.db"); // Create or open the DB file

const insuranceTypes = [
  {
    name: "Auto Insurance",
    description:
      "Covers physical damage and/or bodily injury resulting from traffic collisions.",
  },
  {
    name: "Health Insurance",
    description:
      "Covers the whole or a part of the risk of a person incurring medical expenses.",
  },
  {
    name: "Life Insurance",
    description:
      "A contract that pays out a sum of money either on the death of the insured person or after a set period.",
  },
  {
    name: "Homeowner’s Insurance",
    description:
      "Covers private residences, including liability and property damage.",
  },
];

// Create the table
db.exec(`
    CREATE TABLE IF NOT EXISTS insurances (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
    );
`);

// Insert the dummy data
const insert = db.prepare(
  "INSERT INTO insurances (name, description) VALUES (?, ?)"
);
for (const type of insuranceTypes) {
  insert.run(type.name, type.description);
}

console.log("Database initialized and populated with dummy data.");
db.close();
