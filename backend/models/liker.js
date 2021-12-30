module.exports = (sequelize, Sequelize) => {
    const liker = sequelize.define('liker',
    {
      type: [String],
      allowNull: false,
    },
  );
  
  return liker;
  };
  
  