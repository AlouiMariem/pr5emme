const { authJwt } = require("../middlewares");
const controller = require("../controllers/item.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.post(
        "/api/item/create",
        [
            [authJwt.verifyToken, authJwt.isUser]
        ],
        controller.createItem
    );

    app.get(
        "/api/item/all",
        controller.getAllItems
    )
    
    app.post(
        "/api/item/update",
        [
            [authJwt.verifyToken, authJwt.isUser]
        ],
        controller.createItem
    );

};
