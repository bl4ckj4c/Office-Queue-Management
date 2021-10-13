'use strict';

const express = require('express');
const morgan = require('morgan'); // logging middleware
const Dao = require('./dao'); // module for accessing the exams in the DB



// init express
const app = express();
const port = 3001;

// set-up the middlewares
app.use(morgan('dev'));
app.use(express.json());



// POST /api/exams
app.post('/api/exams',  [
], async (req, res) => {
  

  const selectedType = {
    code: req.body.value,
    score: req.body.label,
    date: 0,
  };

  try {
    await Dao.selectType (selectedType, req.user.id);
    res.status(201).end();
  } catch(err) {
    res.status(503).json({error: `Database error`});
  }
});

app.get('/api/client', (req, res) => {
  Dao.listSelection()
    .then(type => res.json(type))
    .catch(() => res.status(500).end());
});


// Activate the server
app.listen(port, () => {
  console.log(`react-score-server listening at http://localhost:${port}`);
});