import mysql from "mysql2/promise";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "luendu",
  waitForConnections: true,
});
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to mysql database", err);
//   } else {
//     console.log("Connected to mysql database");
//   }
// });
