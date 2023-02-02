const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const picturesControllers = require("./controllers/picturesControllers");
const groupsControllers = require("./controllers/groupsControllers");
const albumControllers = require("./controllers/albumControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", usersControllers.add);
router.put("/users/:id", usersControllers.edit);

router.get("/pictures", picturesControllers.browse);
router.get("/pictures/:id", picturesControllers.read);
router.post("/pictures", picturesControllers.add);
router.put("/pictures/:id", picturesControllers.edit);

router.get("/groups", groupsControllers.browse);
// router.get("/groups/:id", groupsControllers.read);
// router.post("/groups", groupsControllers.add);
// router.put("/pictures/:id", groupsControllers.edit);

router.get("/albums", albumControllers.browse);
router.get("/albums/:id", albumControllers.read);
router.post("/albums", albumControllers.add);
router.put("/albums/:id", albumControllers.edit);
module.exports = router;
