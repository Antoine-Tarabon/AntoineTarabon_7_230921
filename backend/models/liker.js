module.exports = (sequelize, Sequelize) => {
    const liker = sequelize.define('liker',
    {
      type: [String],
      required: true,
    },
  );
  
  return liker;
  };
  
  