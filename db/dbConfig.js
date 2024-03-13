const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	user: "Forum123_rearraysof",
	password: "1711a1f7b6a5d3b6b62e0edb6f31cdb1916640c6",
	database: "Forum123_rearraysof",
	host: "6cf.h.filess.io",
	port: 3306,
	connectionLimit: 10,
});

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
