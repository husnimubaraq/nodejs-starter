const { express } = require("../../configs/express");
const { findOne, findProfileByAccount } = require("./controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.use(auth.authUser);
router.get("/find/:id", findOne);
router.get("/find-profile/:username", findProfileByAccount);

module.exports = router;