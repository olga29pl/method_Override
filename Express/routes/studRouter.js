const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();
/* GET students page. */

router.get('/', function (req, res) {
    fs.readFile('./students.json', 'utf8', function (err, data) {
        if (err) throw err;
        let elements = JSON.parse(data);
        res.render('students', {
            elements: elements
        });
    });
});


router.post('/', urlencodedParser, (req, res, elements) => {
    if (!req.body) return res.sendStatus(400)
    fs.readFile('./students.json', 'utf8', function (err, data) {
        if (err) throw err;
        let json = JSON.parse(data);
        let value = req.body.id;
        let newName = req.body.newName;
        let newId = req.body.newId;
        let elements = json.filter(el => el.id != value);
        if(newId && newName) {
        elements = [...elements,{id:newId, name:newName}];
        }
        res.render('students', { elements: elements });
    });
});

module.exports = router;
