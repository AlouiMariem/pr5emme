const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/user/all",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAllUsers
  );

  app.get(
    "/api/userById/:userId",
    [authJwt.verifyToken],
    controller.getUser
  );

  app.post(
    "/api/user/update",
    [authJwt.canUpdate],
    controller.updateUser
  )

  app.post(
    "/api/user/delete",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteUser
  )
};
