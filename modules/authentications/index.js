const { express } = require("../../configs/express");
const { login } = require("./controller");
const auth = require("../../middlewares/auth");
// validator
const validate = require("../../middlewares/validation");
const { dataLoginSchema } = require("./schemaValidation");

const router = express.Router();

router.post("/login", validate(dataLoginSchema, "body"), login);

module.exports = router;