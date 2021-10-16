'use strict';

const {body, param, validationResult, sanitizeBody, sanitizeParam} = require('express-validator');
const express = require('express');
const morgan = require('morgan'); // logging middleware
const Dao = require('./dao');
const {toJSON} = require("express-session/session/cookie"); // module for accessing the exams in the DB


// init express
const app = express();
const port = 3001;

// set-up the middlewares
app.use(morgan('dev'));
app.use(express.json());


// POST /api/exams
app.post('/api/exams', [], async (req, res) => {


    const selectedType = {
        code: req.body.value,
        score: req.body.label,
        date: 0,
    };

    try {
        await Dao.selectType(selectedType, req.user.id);
        res.status(201).end();
    } catch (err) {
        res.status(503).json({error: `Database error`});
    }
});

app.get('/api/client', (req, res) => {
    Dao.listSelection()
        .then(type => res.json(type))
        .catch(() => res.status(500).end());
});

// Manage the POST request for the manager statistics
app.post('/api/manager',
    body('typeOfRequest')
        // Check if the typeOfRequest parameter is not null
        .exists({checkNull: true})
        .bail()
        // Check if the typeOfRequest parameter is not empty
        .notEmpty()
        .bail()
        // Check if the typeOfRequest parameter is a string
        .isString()
        // Check if the typeOfRequest parameter is equal to "manager"
        .custom((value, req) => {
            return value === "manager";
        }),
    body('ID')
        // Check if the ID parameter is not null
        .exists({checkNull: true})
        .bail()
        // Check if the ID parameter is a number
        .custom((value, req) => {
            let regex = new RegExp(/^[1-9]([0-9]*)?$/);
            return regex.test(value);
        }),
    body('serviceType')
        // Check if the typeOfRequest parameter is not null
        .exists({checkNull: true})
        .bail()
        // Check if the typeOfRequest parameter is a string
        .isString(),
    body('startDate')
        // Check if the typeOfRequest parameter is not null
        .exists({checkNull: true})
        .bail()
        // Check if the typeOfRequest parameter is not empty
        .notEmpty(),
    body('endDate')
        // Check if the typeOfRequest parameter is not null
        .exists({checkNull: true})
        .bail()
        // Check if the typeOfRequest parameter is not empty
        .notEmpty(),
    (req, res) => {

        const result = validationResult(req);
        // Validation error
        if (!result.isEmpty()) {
            let jsonArray = [];
            for (let item of result.array())
                jsonArray.push({
                    param: item.param,
                    error: item.msg,
                    valueReceived: item.value
                })
            res.status(400).json({
                info: "The server cannot process the request",
                errors: jsonArray
            });
        }
        // No error in validation
        else {
            let jsonData = req.body;

            // Statistics about one counter
            if (jsonData.serviceType === "" && jsonData.ID !== "") {
                Dao.getStatisticsCounter(jsonData.ID, jsonData.startDate, jsonData.endDate)
                    .then(r => res.status(200).json(r))
                    .catch(() => res.status(500).end());
            }
            // Statistics about one service type
            else if (jsonData.ID === "" && jsonData.serviceType !== "") {
                //
            } else {
                //
            }
        }
    });


app.post('/api',
    async (req, res) => {

        const client = {
            serviceType: req.body.serviceType,
            id: req.body.id,
            date: req.body.date,
        };

        try {
            await Dao.addClient(client);
            res.status(201).end();
        } catch (err) {
            res.status(503).json({error: `Database error during the creation of exam ${client.id}.`});
        }
    });


// Activate the server
app.listen(port, () => {
    console.log(`react-score-server listening at http://localhost:${port}`);
});