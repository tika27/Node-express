const mysql = require('mysql');

const connection = mysql = sql.createConnection({
    host: 'localhostmap',
    port: 8080,
    user: 'root',
    password: 'root',
    database: 'burg_db'

})

connection.connection((err) =>{
    if (err) {
        console.log(`Error Connecting: ${err.stack} `);
        return;

    }
    console.log(`Connected as ID: ${connection.threadId}`)
});

module.exports = connection;