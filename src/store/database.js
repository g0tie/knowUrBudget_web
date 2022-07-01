import * as alasql from 'alasql';

const createDatabase = () =>
{
    alasql(`
    CREATE LOCALSTORAGE DATABASE IF NOT EXISTS db;
    ATTACH LOCALSTORAGE DATABASE db;
    USE db;
    `);
}

const createTables = () =>
{
    alasql(`CREATE TABLE IF NOT EXISTS Expenses(id INT AUTOINCREMENT PRIMARY KEY, name STRING, amount INT, date DATE);`)
    alasql(`CREATE TABLE IF NOT EXISTS Types(id INT AUTOINCREMENT PRIMARY KEY, name STRING);`)
    alasql(`CREATE TABLE IF NOT EXISTS Limit(id INT AUTOINCREMENT PRIMARY KEY, amount INT, date DATE));`)
}

const insertData = (table) =>
{
    switch (table, payload) {
        case "expenses":
            alasql(`INSERT INTO Expenses VALUES ?`, [payload]);
        break;

        case "types":
            alasql(`INSERT INTO Types VALUES ?`, [payload]);
        break;

        case "limit":
            alasql(`INSERT INTO Limit VALUES ?`, [payload]);
        break;
    }
}

const getData = (id, table) =>
{
    switch (table) {
        case "expenses":
            alasql(`SELECT * FROM Expenses WHERE id = ?`, [id]);
        break;

        case "types":
            alasql(`SELECT * FROM Types WHERE id = ?`, [id]);
        break;

        case "limit":
            alasql(`SELECT * FROM Limit WHERE id = ?`, [id]);
        break;
    }

}

const getDatas = (table) => {
    switch (table) {
        case "expenses":
            alasql(`SELECT * FROM Expenses`);
        break;

        case "types":
            alasql(`SELECT * FROM Types`);
        break;

        case "limit":
            alasql(`SELECT * FROM Limit`);
        break;
    }
}

const updateData = (id, table, payload) =>
{
    switch (table) {
        case "expenses":
            alasql(`UPDATE FROM Expenses SET ? WHERE id = ?`, [payload, id]);
        break;

        case "types":
            alasql(`UPDATE FROM Types SET ? WHERE id = ?`, [payload, id]);
        break;

        case "limit":
            alasql(`UPDATE FROM Limit SET ? WHERE id = ?`, [payload, id]);
        break;
    }

}

const deleteData = (id, table) =>
{
    switch (table) {
        case "expenses":
            alasql(`SELECT * FROM Expenses WHERE id = ?`, [id]);
        break;

        case "types":
            alasql(`SELECT * FROM Types WHERE id = ?`, [id]);
        break;

        case "limit":
            alasql(`SELECT * FROM Limit WHERE id = ?`, [id]);
        break;
    }

}

export {
    createDatabase,
    createTables,
    insertData,
    getData,
    getDatas,
    updateData,
    deleteData
}