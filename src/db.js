import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "crudnodejs.cbceqk26q7x4.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "viviandevops2024",
  database: "CrudNodejs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
