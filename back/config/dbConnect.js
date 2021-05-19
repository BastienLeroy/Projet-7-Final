//Requete pour connexion à la DB
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.HOST_TOKEN,
    user: process.env.USER_TOKEN,
    password: process.env.PASSWORD_TOKEN,
    database : process.env.DATABASE_TOKEN
});

db.connect(function(err) { 
    if (err) throw err;
    console.log('Connecté!')
});

module.exports = db;
