module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('Post',
  {
    // user_id: {
    //   type: binInteger,
    //   required: true
    // },
    message: {
      type: Sequelize.STRING,
      maxlength: 500,
    },
    picture: {
      type: Sequelize.STRING,
    },
    video: {
      type: Sequelize.STRING,
    },
    // likers: {
    //   type: [String],
    //   required: true,
    // },
    // comments: {
    //   type: [
    //     {
    //       commenterId:String,
    //       commenterPseudo: String,
    //       text: String,
    //       timestamp: Number,
    //     }
    //   ],
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

return Post;
};

