const db = require("../models");
const User = db.user;
const Role = db.role;




exports.getAllUsers = (req, res) => {
  User.find()
    .populate("roles", "-__v")
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send({
        users: users
      });
    });
};

exports.getUser = (req, res) => {
  User.findById(req.params.userId)
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send({
        user: user
      });
    });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.body.userId, { username:req.body.username },
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated User : ", docs);
      }
    });
}

exports.deleteUser=(req,res)=>{
  User.findByIdAndRemove(req.body.userId).then(data => {
      if (!data) {
        res.status(404).send({
          message: Cannot delete user with${req.body.userId} . Maybe user was not found!
        });
      } else {
        res.send({
          message: "user was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with userId=" +req.body.userId
      });
    });
}