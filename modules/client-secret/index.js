const { express } = require("../../configs/express");
const { findByAccount, find } = require("./controller");

const router = express.Router();

router.get("/find", find);
router.get("/find/:username", findByAccount);

module.exports = router;