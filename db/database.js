'use strict()';
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Martial-One';
// 'postgres://localhost:5432/student' then this new table is going to be added to the /student user

var client = new pg.Client(connectionString);
client.connect();

// create table where scrapped events are going to be stored. 
var query = client.query('DROP TABLE IF EXISTS newEvents');
// var query = client.query('CREATE TABLE newEvents(id SERIAL ,name VARCHAR(240) not null)');

// var query1 = client.query('CREATE TABLE newEvents(id SERIAL PRIMARY KEY NOT NULL,name VARCHAR(300) NOT NULL, date VARCHAR(100) NOT NULL,cost VARCHAR(200) NOT NULL, venue VARCHAR(200) NOT NULL, description VARCHAR(1000) NULL, city VARCHAR(100) DEFAULT NULL,logo VARCHAR(400) DEFAULT NULL , latitute VARCHAR(100) DEFAULT NULL,longitude VARCHAR(100) DEFAULT NULL, address VARCHAR(200) DEFAULT NULL)');

var query1 = client.query('CREATE TABLE newEvents(id SERIAL PRIMARY KEY,data json)');
// populate the table with the data scrapped
var dataScrapped = require('./../Data/musicSites.js');
var data = dataScrapped;

var queryInsert;
for(var j=0;j<data.length;j++){
  // queryInsert = client.query('INSERT INTO newEvents(id,name,date,cost,venue,description,city,logo) values($1,$2,$3,$4,$5,$6,$7,$8)', [ j, data[j]['name'], data[j]['date'], data[j]['cost'], data[j]['venue'], data[j]['description'], data[j]['city'], data[j]['logo']]);
 	queryInsert = client.query('INSERT INTO newEvents(id, data) values($1,$2)', [j,data[j]]);
}

queryInsert.on('end',  function() { client.end(); }); 




// feat/name_of_feature
// refactor/
// doc/
// bug/ticket_number 
// test/name_test