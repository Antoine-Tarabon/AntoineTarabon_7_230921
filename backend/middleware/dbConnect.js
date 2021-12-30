const Sequelize = require ("sequelize");

const sequelize = new Sequelize('mysql://root@localhost:3306/groupomania')

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require('../models/post')(sequelize, Sequelize)
db.comments = require('../models/comment')(sequelize, Sequelize)
db.likers = require('../models/liker')(sequelize, Sequelize)
db.users = require('../models/user')(sequelize, Sequelize)

db.posts.hasMany(db.comments)
db.comments.belongsTo(db.posts)

db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

db.users.hasMany(db.posts)
db.posts.belongsTo(db.users)

module.exports = db;