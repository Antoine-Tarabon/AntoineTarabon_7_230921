const userModel = require("../models/user");
const fs = require("fs");
const { uploadErrors } = require("../utils/errors");
const path = require('path');

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
        path.extname(req.file.originalname) !== ".jpg" &&
        path.extname(req.file.originalname) !== ".png" &&
        path.extname(req.file.originalname) !== ".jpeg"
    )
      throw Error("invalid file");

    if (req.file.size > 2000000) throw Error("max size");

    const fileName = req.body.name + ".jpg";

    fs.writeFile(`${__dirname}/../../frontend/public/uploads/profil/${fileName}`, req.file.buffer, 'base64', function(err) {
      throw Error('image creation')
    });

  } catch (err) {
    const errors = uploadErrors(err);
    console.log(err);
    return res.status(500).json({ errors });
  }

  try {
    await userModel.findByIdAndUpdate(
      req.body.userId,
      { $set : {picture: "./uploads/profil/" + fileName}},
      { new: true, upsert: true, setDefaultsOnInsert: true},
      (err, docs) => {
        if (!err) return res.status(200).send(docs);
        else throw Error('incorrect upload');
        // if (!err) return res.send(docs);
        // else return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};