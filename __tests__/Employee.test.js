const Employee = require("../lib/Employee");

describe("Employee class", () => {
  const employee = new Employee("Christian Sadler", 19, "csadler@example.com");
  
  describe("getName", () => {
    it("should return the employee's name", () => {
      expect(employee.getName()).toEqual(employee.name);
    });
  });

  describe("getId", () => {
    it("should return the employee's ID", () => {
      expect(employee.getId()).toEqual(employee.id);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email address", () => {
      expect(employee.getEmail()).toEqual(employee.email);
    });
  });

  describe("getRole", () => {
    it('should return "Employee"', () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});