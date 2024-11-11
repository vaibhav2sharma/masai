function Employee(name, age, salary) {
  const employee = Object.create(Employee.prototype);

  employee.name = name;
  employee.age = age;
  employee.salary = salary;
  return employee;
}

Employee.prototype.displayName = function () {
  return this.name;
};

Employee.prototype.increaseAge = function () {
  this.age += 1;
  return this.age;
};

Employee.prototype.decreaseAge = function () {
  this.age -= 1;
  return this.age;
};

function Manager(employee, department) {
  const manager = Object.create(Manager.prototype);
  manager.name = employee.name;
  manager.age = employee.age;
  manager.salary = employee.salary;
  manager.department = department;
  return manager;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.displayDepartment = () => {
  return this.department;
};

Manager.prototype.increaseSalary = (amount) => {
  this.salary += amount;
  return this.salary;
};

Manager.prototype.decreaseSalary = (amount) => {
  this.salary -= amount;
  return this.salary;
};

const emp = Employee("vaibhav", 24, 4000);

console.log(emp.displayName());

const mgr = Manager(emp, "webdev");
console.log(mgr.displayName());
console.log(mgr.increaseSalary(400));
