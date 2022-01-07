const User = require('./user');
const Post = require('./post');

module.exports = (sequelize, Sequelize) => {
    const Follow = sequelize.define('Follow',
    {
        FollowerId: {
            type: Sequelize.INTEGER,
            references: {
                model: Users,
                key:'id'
            }
        },
        FollowingId: {
            type: Sequelize.INTEGER,
            references: {
                model: Users,
                key:'id'
            }
        },
        timestamp: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }
  );  
    return Follow;
};

