const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");

router.get("/search/", categoryController.searchCategory);
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategory);
router.post("/", categoryController.insert);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
