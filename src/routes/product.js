const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProduct);
router.post("/", productController.insert);
router.put("/:id", productController.update);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
