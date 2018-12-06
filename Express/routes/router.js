const express = require('express');
const router = express.Router();
const action = require("../models/action.js");
const fs = require("fs");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/students', (req, res) => {
    const elements = action.students;
    res.render('students', {
        elements: elements
    });
});

//get student with id
router.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const elements = action.getId(id);
    res.render('id', {
        elements: elements
    });
});

//delete student
router.delete('/students', urlencodedParser, (req, res) => {
    const id = req.body.id;
    let elements = action.deleteId(id);
    res.render('students', { elements: elements });
});

//add student
router.post('/students/add', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    res.render('formAdd');
});

router.post('/students', urlencodedParser, (req, res) => {
    const reqBody = req.body;
    let elements = action.addStudent(reqBody);
    res.render('students', { elements: elements });
    res.redirect('/students');
});

//edit student
router.post('/students/edit', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    const id = req.body.id;
    res.render('formEdit', {id: id});
});

router.put('/students', urlencodedParser, (req, res) => {
    const reqBody = req.body;
    let elements = action.editStudents(reqBody);
    res.render('students', { elements: elements });
});

module.exports = router;