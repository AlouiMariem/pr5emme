const { authJwt } = require("../middlewares");
const controller = require("../controllers/tags.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/tag/all", controller.getAllTags);

    app.post(
        "/api/tag/create",
        [
            [authJwt.verifyToken, authJwt.isAdmin]
        ],
        controller.createTage
    );

    app.post("/api/tag/delete",
        [
            [authJwt.verifyToken, authJwt.isAdmin]
        ],
        controller.deleteTag)

};
