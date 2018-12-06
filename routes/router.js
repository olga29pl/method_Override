const express = require('express');
const router = express.Router();
const action = require("../models/action.js");
const fs = require("fs");


router.get('/students', (req, res) => {
        res.send(action.students);
});

router.get('/students/:id', (req, res) => {
        const id = req.params.id;
        res.send(action.getId(id));
});

router.delete('/students/:id', (req, res) => {
        if (!req.body) return res.sendStatus(400)
        const id = req.params.id;
        res.send(action.deleteId(id));
});

router.post('/students', (req, res) => {
        const reqBody = req.body;
        res.send(action.addStudent(reqBody));
});


router.put('/students', (req, res) => {
        const reqBody = req.body;
        res.send(action.editStudents(reqBody));
});


module.exports = router;