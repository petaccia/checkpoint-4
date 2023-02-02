const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const picturesControllers = require("./controllers/picturesControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", usersControllers.add);
router.put("/users/:id", usersControllers.edit);

router.get("/pictures", picturesControllers.browse);
router.get("/pictures/:id", picturesControllers.read);
router.post("/pictures", picturesControllers.add);
router.put("/pictures/:id", picturesControllers.edit);

module.exports = router;
