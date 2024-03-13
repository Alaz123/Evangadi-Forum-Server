// db connection
const dbConnection = require("../db/dbConfig");

// Database table creator function
function createTable(req, res) {
	// Users Table
	const Users = `CREATE TABLE if not exists users(
    userid INT(20) NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (userid)
    )`;

	// Questions Table
	const Questions = `CREATE TABLE if not exists questions(
        id INT(20) NOT NULL AUTO_INCREMENT,
        questionid VARCHAR(100) NOT NULL UNIQUE,
        userid INT(20) NOT NULL,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(200) NOT NULL,
        tag VARCHAR(20),
        PRIMARY KEY (id,questionid),
        FOREIGN KEY(userid) REFERENCES users(userid)
            )`;

	// Answers Table
	const Answers = `CREATE TABLE if not exists answers(
        answerid INT(20) NOT NULL AUTO_INCREMENT,
        userid INT(20) NOT NULL,
        questionid VARCHAR(100) NOT NULL,
        answer VARCHAR(200) NOT NULL,
        PRIMARY KEY(answerid),
        FOREIGN KEY(questionid) REFERENCES questions(questionid),
        FOREIGN KEY(userid) REFERENCES users(userid)
            )`;

	//Create Table Query function
	function CreateTable(table) {
		dbConnection.query(table, (err) => {
			if (err) console.log(err);
			else console.log("table created");
			res.end("table created");
		});
	}

	//   Table Creation
	CreateTable(Users);
	CreateTable(Questions);
	CreateTable(Answers);
}

// function deleteTables(req, res) {
//   // Delete Answers table
//   const deleteAnswersTable = `DROP TABLE IF EXISTS answers`;

//   // Delete Questions table
//   const deleteQuestionsTable = `DROP TABLE IF EXISTS questions`;

//   // Delete Users table
//   const deleteUsersTable = `DROP TABLE IF EXISTS users`;

//   // Delete Table Query function
//   function DeleteTable(table) {
//     dbConnection.query(table, (err) => {
//       if (err) console.log(err);
//       else console.log("Table deleted");
//     });
//   }

//   // Delete Table Data function
//   function DeleteTableData(table) {
//     const deleteDataQuery = `TRUNCATE TABLE ${table}`;
//     dbConnection.query(deleteDataQuery, (err) => {
//       if (err) console.log(err);
//       else console.log(`Data deleted from ${table}`);
//     });
//   }

//   // Delete Tables
//   DeleteTableData(deleteAnswersTable);
//   DeleteTableData(deleteQuestionsTable);
//   DeleteTableData(deleteUsersTable);

//   // Delete Table Data
//   DeleteTable(deleteAnswersTable);
//   DeleteTable(deleteQuestionsTable);
//   DeleteTable(deleteUsersTable);

//   res.end("Tables and data deleted");
// }

module.exports = { createTable };
