const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 8889,
//     user: 'root',
//     password: 'root',
//     database: 'burg_db'

// });
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'burg_db'
    
    });
}

connection.connect((err) =>{
    if (err) {
        console.log(`Error Connecting: ${err.stack} `);
        return;

    }
    console.log(`Connected as ID: ${connection.threadId}`)
});

module.exports = connection;