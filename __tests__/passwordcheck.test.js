const { checkPassword } = require("../utils/passwordcheck.js");

test("checkPassword will return true if they match", () => {
  const plainTextPassword1 = "DFGh5546*%^__90";
  const hash = "$2b$10$69SrwAoAUNC5F.gtLEvrNON6VQ5EX89vNqLEqU655Oy9PeT/HRM/a";
  const res = checkPassword(plainTextPassword1, hash);
  expect(res).toEqual(true);
});
