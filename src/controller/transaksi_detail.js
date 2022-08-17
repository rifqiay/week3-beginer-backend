const transaksi_detail = require("../models/transaksi_detail");

const transaksi_detailController = {
  getAllTransactions: (req, res) => {
    transaksi_detail
      .selectAll()
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  getTransactions: (req, res) => {
    const id = Number(req.params.id);
    transaksi_detail
      .select(id)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  insertTransaction: (req, res) => {
    const { id, adress } = req.body;
    transaksi_detail
      .insert(id, adress)
      .then(res.json("Transaction Created"))
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    const { adress } = req.body;
    transaksi_detail
      .update(id, adress)
      .then(res.json("Transaction Updated"))
      .catch((err) => res.send(err));
  },
  deleteTransactions: (req, res) => {
    const id = Number(req.params.id);
    transaksi_detail
      .deletetransaksi_detail(id)
      .then(res.json("Transaction Deleted"))
      .catch((err) => res.send(err));
  },
};

module.exports = transaksi_detailController;
