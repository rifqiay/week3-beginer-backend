const transaksiModel = require("../models/transaksi");

const transactionController = {
  getAllTransactions: async (request, response) => {
    try {
      const page = Number(request.query.page) || 1;
      const limit = Number(request.query.limit) || 5;
      const offset = (page - 1) * limit;
      const sortby = request.query.sortby || "id";
      const sort = request.query.sort || "asc";
      console.log(sort);
      const result = await transaksiModel.showAlltransaksi({
        limit,
        offset,
        sort,
        sortby,
      });
      const {
        rows: [count],
      } = await transaksiModel.countTransaksi();
      const totalData = parseInt(count.count);
      const totalPages = Math.ceil(totalData / limit);
      console.log(result);
      response.status(200).json({
        pagination: {
          currentPage: page,
          limit: limit,
          totalData: totalData,
          totalPages: totalPages,
        },
        data: result.rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getTransactions: (req, res) => {
    const id = Number(req.params.id);
    transaksiModel
      .showTransaksi(id)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  insertTransaction: (req, res) => {
    const { id, adress, transaksi_detail_id } = req.body;
    transaksiModel
      .insertTransaksi(id, adress, transaksi_detail_id)
      .then(res.json("Transaction Created"))
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    const { adress, transaksi_detail_id } = req.body;
    transaksiModel
      .updateTransaksi(id, adress, transaksi_detail_id)
      .then(res.json("Transaction Updated"))
      .catch((err) => res.send(err));
  },
  deleteTransactions: (req, res) => {
    const id = Number(req.params.id);
    transaksiModel
      .deleteTransaksi(id)
      .then(res.json("Transaction Deleted"))
      .catch((err) => res.send(err));
  },
};

module.exports = transactionController;
