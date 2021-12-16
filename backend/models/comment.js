module.exports = (sequelize, Sequelize) => {
 const Comment = sequelize.define('Comment',
 {
    commenterId: {
        type: Sequelize.STRING,
    },
    commenterPseudo: {
        type: Sequelize.STRING,
    },
    text: {
        type: Sequelize.STRING,
    },
    timestamp: {
        type: Sequelize.INTEGER,
    }, 
    required: true,
 }
);
    
return Comment; 
};

