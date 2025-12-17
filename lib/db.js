// lib/db.js
// const Database = require("better-sqlite3");
// Use the 'process.cwd()' to ensure the path is correct regardless of where the script is called from
const db = new Database(process.cwd() + "/insurance.db", {
  verbose: console.log,
});
// Enable WAL (Write-Ahead Logging) mode for better concurrency
db.pragma("journal_mode = WAL");

export function getInsuranceTypes() {
  // This function will only be called in a server environment (API route or Server Component)
  const stmt = db.prepare("SELECT id, name, description FROM insurances");
  return stmt.all();
}
