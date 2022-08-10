const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  hashPassword(password) {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        // Store hash in your password DB.
        return hash;
      })
      .catch((err) => console.error(err.message));
  },
};
