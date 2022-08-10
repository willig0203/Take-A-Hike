const { hashPassword } = require("../utils/passwordhash.js");

test("hashPassword will return the hash", () => {
  const plainTextPassword1 = "DFGh5546*%^__90";
  const hash = hashPassword(plainTextPassword1);
  console.log(`Hash: ${hash}`);
  expect(hash).toMatch(/./);
});
