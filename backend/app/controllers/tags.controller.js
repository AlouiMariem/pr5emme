const db = require("../models");
const Tag = db.tag;


exports.createTage =(req, res)=>{
    const tag= new Tag({
        name:req.body.name,
        items:[]
    })
    tag.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({ message: "tag was registered successfully!" });
    })
}

exports.getAllTags =(req, res)=>{
    Tag.find()
    .exec((err, tages) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.status(200).send({
        tages:tages
      });
    });
}

exports.deleteTag=(req,res)=>{
    Tag.findByIdAndRemove(req.body.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete tag with${req.body.id} . Maybe tag was not found!`
          });
        } else {
          res.send({
            message: "tag was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete tag with id=" +req.body.id
        });
      });
}