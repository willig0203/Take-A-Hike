// add to api call
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login"); // page does not exist yet
  } else {
    next();
  }
};

module.exports = withAuth;
