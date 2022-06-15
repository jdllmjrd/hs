var router = require("express").Router();

// import controller user
const userController = require("../controllers/users.controller");


router.post("/", userController.create); // insert
router.put("/:id", userController.update); // update
router.get("/datatable", userController.findDataTable);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.delete("/:id", userController.delete);



module.exports = router;