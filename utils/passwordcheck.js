// check password
const bcrypt = require("bcrypt");

module.exports = {
  checkPassword(password, hash) {
    bcrypt
      .compareSync(password, hash)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => console.error(err.message));
  },
};
