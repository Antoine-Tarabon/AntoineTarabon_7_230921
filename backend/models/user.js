
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User',
  {
    pseudo: {
      type: Sequelize.STRING,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true
    },
    email: {
      type: Sequelize.STRING,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
      max: 1024,
      minlength: 6
    },
    picture: {
      type: Sequelize.STRING,
      default: "./uploads/profil/no-profile-pic.png"
    },
    bio :{
      type: Sequelize.STRING,
      max: 1024,
    },
    followers: {
      type: [Sequelize.STRING]
    },
    following: {
      type: [Sequelize.STRING]
    },
    likes: {
      type: [Sequelize.STRING]
    }
  },
  {
    timestamps: true,
  }
);

return User;
};

// play function before save into display: 'block',
userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email')
};



