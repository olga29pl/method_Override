const express = require('express');
const fs = require('fs');
const router = express.Router();
/* GET users listing. */

router.get('/:id', (req, res) => {
  
  fs.readFile('./students.json', 'utf8', (err, data) => {
    if (err) throw err; 
    const id = req.params.id;
    let json = JSON.parse(data);
    let elements = json.filter(el => el.id == id);
    res.render('id', { elements:elements });
  });
});

module.exports = router;

