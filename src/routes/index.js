// If no id where given -> display all invoicesconst router = require("express").Router();
const path = require("path");
const router = require("./home.routes");
const static = require("express").static;

// Images
router.use(
  "/users-profile-pic",
  static(path.join(__dirname + "../../../public/users_profile_pic"))
);
router.use(
  "/featured_dentist",
  static(path.join(__dirname + "../../../public/featured_dentist"))
);
router.use(
  "/services",
  static(path.join(__dirname + "../../../public/services"))
);

// Home page
router.use(`/${process.env.API_VERSION}/home`, require("./home.routes"));
// Register Page
router.use(
  `/${process.env.API_VERSION}/register`,
  require("./register.routes")
);
// For log in page
router.use(`/${process.env.API_VERSION}/login`, require("./login.routes"));
//Service page
router.use(`/${process.env.API_VERSION}/services`, require("./service.routes"));

router.use(`/${process.env.API_VERSION}/dentist`, require("./dentist.routes"));

/** Admin user route*/
router.use(`/${process.env.API_VERSION}/admin`, require("./admin.routes"));

router.use(`/${process.env.API_VERSION}/staff`, require("./staff.routes"));

/** Calendar */
router.use(
  `/${process.env.API_VERSION}/calendar`,
  require("./calendar.routes")
);

/** General */
router.use(
  `/${process.env.API_VERSION}/general`,
  require("./general.routes")
);
/** Patient */
router.use(`/${process.env.API_VERSION}/patient`, require("./patient.routes"));

module.exports = router;
