
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User',
  {
    pseudo: {
      type: Sequelize.STRING,
      // allowNull: false,
      // minLength: 3,
      // maxLength: 55,
      // unique: true,
      // trim: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      // validate: [isEmail],
      // lowercase: true,
      // unique: true,
      // trim: true,
    },
    password: {
      type: Sequelize.STRING,
      // allowNull: false,
      // max: 1024,
      // minlength: 6
    },
    picture: {
      type: Sequelize.STRING,
      //default: "./uploads/profil/no-profile-pic.png"
    },
    bio :{
      type: Sequelize.STRING,
      // max: 1024,
    },
    // followers: {
    //   type: [Sequelize.STRING]
    // },
    // following: {
    //   type: [Sequelize.STRING]
    // },
    // likes: {
    //   type: [Sequelize.STRING]
    // }
  },
  {
    timestamps: true,
  }
);
 User.beforeCreate(async (user,) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(this.password, salt);
 });

 User.login = async function(email, password) {
   User.findAll({where: email})
   .then(async user =>{
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
   })
   .catch(err => {
     throw Error(err.message || "s")
       
     })
  };



return User;
};




