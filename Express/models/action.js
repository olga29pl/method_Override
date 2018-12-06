const fs = require("fs");

let students = JSON.parse(fs.readFileSync('./students.json', 'utf8'));

module.exports.students = students;

const getId = (id) => {
    return students.filter(el => el.id == id);
};

module.exports.getId = getId;

const deleteId = (id) => {
    return students.filter(el => el.id != id);
}

module.exports.deleteId = deleteId;

const addStudent = (reqBody) => {
    let id = Date.now();
    return students = [...students, { id: id, name: reqBody.name, taskOne: reqBody.task1, taskTwo: reqBody.task2, taskThree: reqBody.task3 }];
}

module.exports.addStudent = addStudent;

const editStudents = (reqBody) => {
    students = students.map(el => el.id == reqBody.id ? { id: reqBody.id, name: reqBody.name, taskOne: reqBody.task1, taskTwo: reqBody.task2, taskThree: reqBody.task3 } : el);
    return students;
}

module.exports.editStudents = editStudents;