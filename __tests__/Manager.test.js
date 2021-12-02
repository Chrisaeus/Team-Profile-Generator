const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  const manager = new Manager("Christian Sadler", 19, "csadler@example.com", "17A");
  
  it("is a subclass of the Employee class", () => {
    expect(manager).toBeInstanceOf(Employee);
  });

  describe("getName", () => {
    it("should return the manager's name", () => {
      expect(manager.getName()).toEqual(manager.name);
    });
  });

  describe("getId", () => {
    it("should return the manager's ID", () => {
      expect(manager.getId()).toEqual(manager.id);
    });
  });

  describe("getEmail", () => {
    it("should return the manager's email address", () => {
      expect(manager.getEmail()).toEqual(manager.email);
    });
  });

  describe("getRole", () => {
    it('should return "Manager"', () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});