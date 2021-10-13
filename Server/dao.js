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
    const sql = 'SELECT * FROM course';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const types = rows.map((type) => ({ code: type.code, name: type.name, CFU: type.CFU }));
      resolve(types);
    });
  });
};

