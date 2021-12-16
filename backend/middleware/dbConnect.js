const Sequelize = require ("sequelize");

const sequelize = new Sequelize('mysql://root@localhost:3306/groupomania')

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require('../models/post')(sequelize, Sequelize)
db.comments = require('../models/comment')(sequelize, Sequelize)

db.posts.hasMany(comments)
db.comments.belongTo(db.posts)

module.exports = db;