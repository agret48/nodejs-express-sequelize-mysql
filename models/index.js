const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const a = "mysql://root:QdiVdaGmNWcXbRfEfzVQNGvkOMewlJcS@viaduct.proxy.rlwy.net:22284/railway"
const sequelize = new Sequelize(a);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.authentification = require("./authentification.js")(sequelize, Sequelize)

module.exports = db;
