const express = require("express");
const router = express.Router();
module.exports = router;


const employees = require("../data/employees")

router.post("/employees", (req, res,next) => {
    const newEmployee = req.body;
    newEmployee.id = employees.length ? employees[employees.length -1].id + 1 :1;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});



router.get("/", (req, res) => {
    res.send("Hello employees!");
  });
  

  
  router.get("/employees", (req, res) => {
    res.json(employees);
  });
  
  router.get("/employees/random", (req, res) => {
    const i = Math.floor(Math.random() * employees.length);
    res.json(employees[i]);
  });
  
  router.get("/employees/:id", (req, res) => {
    const { id } = req.params;
    const employee = employees.find((e) => e.id === +id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).send(`There is no employee with id ${id}.`);
    }
  });
  

