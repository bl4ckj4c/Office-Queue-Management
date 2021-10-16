'use strict';
/* Data Access Object (DAO) module for accessing courses and exams */

const db = require('./db');


// add a new selecttype
/*exports.selectType = (e, userId) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO exam(coursecode, date, score, userid) VALUES(?, DATE(?), ?, ?)';
    db.run(sql, [e.value, 0, e.label, 1], function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
};*/

exports.listSelection = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT serviceType, date FROM Service';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const types = rows.map((type) => ({ serviceType: type.serviceType, date: type.date }));
      resolve(types);
    });
  });
};


// add new client
exports.addClient = (client) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO Client(clientId, officeId, serviceId) VALUES(?, ?, ?)';
    db.run(sql, [client.id,10, client.id ], function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
};
