const db = require("../models");
const Item = db.item;
const Tag=db.tag

exports.createItem = (req, res) => {
    console.log("you", req.body);
    let t=Date.now()+""

    const item = new Item({
        title: req.body.title,
        discription: req.body.discription,
        image: t+req.files.image.name,
        initialPrice: req.body.initialPrice,
        author: req.body.author,
        tags: req.body.tags.split(','),
        openAt:new Date( req.body.openAt),
        closeAt: new Date(req.body.closeAt)
    })

    if("req.files ====  ",req.files){
        console.log(req.files)
        var file=req.files.image
        var filename=file.name
        console.log("filename ====  ",filename);
    
        file.mv('./uploads/'+t+filename,function(err){
          if(err){
            console.log("errer here",err);
          }else{
            console.log("file uploaded");
          }
        })
      }
      let itemId
    item.save((err,room) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        itemId=room.id
        req.body.tags.split(',').forEach(el => {
            Tag.findByIdAndUpdate(el,{$push: {"items": itemId}},{safe: true, upsert: true},
            function(err, model) {
                console.log(err);
            })
        });
        res.send({ message: "item was registered successfully!"+itemId });
    })
}

exports.getAllItems = (req, res) => {
  Item.find()
    .populate("tags", "-__v")
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