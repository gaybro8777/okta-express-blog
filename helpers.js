const Sequelize = require("sequelize");


const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

// Only let the user access the route if they are authenticated.
function ensureAuthenticated(req, res, next) {
  if (!req.user) {
    return res.status(401).render("unauthenticated");
  }

  next();
}

// Return a DB instance
function getDB() {
  return db;
}


module.exports = { ensureAuthenticated, getDB };
