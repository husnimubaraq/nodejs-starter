const { express } = require("./configs/express");
const rootRouter = express.Router();

const auth = require("./middlewares/auth");

const router = {
  authRoute: require("./modules/authentications"),
  accountRoute: require("./modules/accounts"),
  clientSecretRoute: require("./modules/client-secret"),
};

// public route section
rootRouter.use("/auths", router.authRoute);

// secure route section
rootRouter.use(auth.authUser);
rootRouter.use("/accounts", router.accountRoute);
rootRouter.use("/client-secret", router.clientSecretRoute);

module.exports = rootRouter;