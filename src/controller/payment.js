const paymentModel = require("../models/payment");
const paymentController = {
  getAllPayment: (req, res) => {
    paymentModel
      .selectAll()
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  getPayment: (req, res) => {
    const id = Number(req.params.id);
    paymentModel
      .select(id)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  insert: (req, res) => {
    const { id, name } = req.body;
    paymentModel
      .insert(id, name)
      .then(res.json("Category created"))
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    paymentModel
      .update(id, name)
      .then(res.json("Category updated"))
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    const id = Number(req.params.id);
    paymentModel
      .deletePayment(id)
      .then(res.json("Category deleted"))
      .catch((err) => res.send(err));
  },
};

module.exports = paymentController;
