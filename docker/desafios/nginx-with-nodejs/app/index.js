const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'desafio'
});

function createTable(conn) {
    const sql = "CREATE TABLE people (name VARCHAR(255))";

    conn.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }

        console.log('tabela criada');

        addRows(connection);
    });
}

function addRows(conn) {
    const sql = "INSERT INTO people(name) VALUES ?";
    const values = [
        ['Rochele']
    ];

    conn.query(sql, [values], (error, results, fields) => {
        if (error) {
            throw error;
        }

        console.log('adicionou registros!');
    });
};

const getPeople = function(callback) {
    const sql = 'SELECT * FROM people';

    connection.query(sql, function(error, results){
        if (error) {
            throw error;
        }

        return callback(results);
    });
}

const preparaNome = function (rows) {
    var listOfNamesHtml = '';

    for (i = 0; i < rows.length; i++) {
        listOfNamesHtml += '<li>' + rows[i].name + '</li>';
    }

    return listOfNamesHtml;
};

connection.connect(function(error) {
    if (error) {
        throw error;
    }

    createTable(connection);
});

app.get('/', (request, response) => {
    getPeople(function(result) {
        var names = preparaNome(result);

        response.send(`
            <h1>Full Cycle Rocks!</h1>
            <p>Lista de nomes cadastrados no banco de dados:</p>
            ${names}
        `);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});