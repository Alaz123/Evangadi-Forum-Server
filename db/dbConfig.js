const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	user: "sql8691135",
	password: "rGmqiPBqRb",
	database: "sql8691135",
	host: "sql8.freesqldatabase.com",
	port: 3306,
	connectionLimit: 10,
});
// hosted database info
// Host: sql8.freesqldatabase.com
// Database name: sql8691135
// Database user: sql8691135
// Database password: rGmqiPBqRb
// Port number: 3306

// const dbConnection = mysql2.createPool({
// 	host: "localhost",
// 	user: "evangadi-admin",
// 	password: `swYlz7ka0S.ZJHeR`,
// 	database: "evangadi_db",
// 	connectionLimit: 10,
// });

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise();

///// turn this on only when creating a table then it off.
// module.exports = dbConnection
