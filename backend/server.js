import mysql from 'mysql2/promise'

// Create a connection
const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'qqq',
  database: 'football',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
console.log("asdf");
console.log(pool);

export async function getClubs() {
    try {
        const res = await pool.query("SELECT * FROM clubs");
        return res[0];
    } catch (error) {
        console.log("Error: ", error);
        
    }
}

export async function postClub(name, city, founded_year) {
    try {
        await pool.query("INSERT INTO clubs (name, city, founded_year) VALUES (?, ?, ?)", [name, city, founded_year]);
    } catch (error) {
        console.log("Error:", error);
    }
}