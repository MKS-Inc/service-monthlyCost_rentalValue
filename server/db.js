// const mysql = require('mysql');
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://siyun:password@localhost:5432/homevalues')


// const db = mysql.createConnection({
//   host:'localhost',
//   user: 'root',
//   password: '',
//   database: 'homevalue_pricetax',
// });

// db.connect((error) => {
//   if (error) {
//     console.log('There has been an error. Error message:', error);
//   } else {
//     console.log('Connection established with id:', db.threadId);
//   }
// });

module.exports = db ;
