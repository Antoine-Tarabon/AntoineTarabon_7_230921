
module.exports = (sequelize, Sequelize) => {
 const Comment = sequelize.define('Comment',
 {
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
 }
);
    
return Comment; 
};

