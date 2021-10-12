'use strict';
/* Data Access Object (DAO) module for accessing courses and exams */

const db = require('./db');


// add a new selecttype
exports.selectType = (e, userId) => {
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
};

