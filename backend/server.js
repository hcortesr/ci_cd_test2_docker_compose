import mysql from 'mysql2/promise'

// Create a connection
const pool = mysql.createPool({
  host: 'db',
  user: 'root',         // cambia esto
  password: 'qqq',  // cambia esto
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
        console.log(res[0]);
    } catch (error) {
        console.log("Error: ", error);
        
    }
}