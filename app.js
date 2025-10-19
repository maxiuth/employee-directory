import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const allEmployees = employees.length;
  const randIndex = Math.floor(Math.random() * (allEmployees + 1));

  if (!employees[randIndex]) {
    return res.status(404).send("There is no employee with that id");
  }

  res.send(employees[randIndex]);
});

app.route("/employees/:id").get((req, res) => {
  //   const { tempId } = req.params;
  const { id } = req.params;
  //   const tempId = tempId + 1;
  //   console.log(tempId);
  console.log(id);
  const employee = employees[id - 1];

  if (!employee) {
    return res.status(404).send("There is no employee with that id");
  }

  res.send(employee);
});

export default app;
