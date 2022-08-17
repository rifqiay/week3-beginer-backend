const express = require("express");
const router = express.Router();
const transaksi_detailController = require("../controller/transaksi_detail");

router.get("/", transaksi_detailController.getAllTransactions);
router.get("/:id", transaksi_detailController.getTransactions);
router.post("/", transaksi_detailController.insertTransaction);
router.put("/:id", transaksi_detailController.update);
router.delete("/:id", transaksi_detailController.deleteTransactions);

module.exports = router;
