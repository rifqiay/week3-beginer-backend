const express = require("express");
const router = express.Router();
const transactionController = require("../controller/transaksi");

router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getTransactions);
router.post("/", transactionController.insertTransaction);
router.put("/:id", transactionController.update);
router.delete("/:id", transactionController.deleteTransactions);

module.exports = router;
