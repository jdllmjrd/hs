var router = require("express").Router();

// import controller user
const usersController = require("../controllers/register.controller");


router.post("/", usersController.create); // insert
router.put("/:id", usersController.update); // update
// router.get("/datatable", usersController.findDataTable);
router.get("/", usersController.findAll);
router.get("/:id", usersController.findOne);
router.delete("/:id", usersController.delete);



module.exports = router;