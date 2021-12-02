const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const engineer = new Engineer("Christian Sadler", 19, "csadler@example.com", "Chrisaeus");
  
  it("is a subclass of the Employee class", () => {
    expect(engineer).toBeInstanceOf(Employee);
  });

  describe("getName", () => {
    it("should return the engineer's name", () => {
      expect(engineer.getName()).toEqual(engineer.name);
    });
  });

  describe("getId", () => {
    it("should return the engineer's ID", () => {
      expect(engineer.getId()).toEqual(engineer.id);
    });
  });

  describe("getEmail", () => {
    it("should return the engineer's email address", () => {
      expect(engineer.getEmail()).toEqual(engineer.email);
    });
  });

  describe("getGithub", () => {
    it("should return the engineer's GitHub username", () => {
      expect(engineer.getGithub()).toEqual(engineer.github);
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});