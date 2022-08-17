const productModel = require("../models/product");
const productController = {
  getAllProduct: async (request, response) => {
    try {
      const page = Number(request.query.page) || 1;
      const limit = Number(request.query.limit) || 5;
      const offset = (page - 1) * limit;
      const sortby = request.query.sortby || "name";
      const sort = request.query.sort || "asc";
      console.log(sort);
      const result = await productModel.selectAll({
        limit,
        offset,
        sort,
        sortby,
      });
      const {
        rows: [count],
      } = await productModel.countProduct();
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
  getProduct: (req, res) => {
    const id = Number(req.params.id);
    productModel
      .select(id)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  insert: (req, res) => {
    const { id, name, stock, price, category_id, transaksi_id } = req.body;
    productModel
      .insert(id, name, stock, price, category_id, transaksi_id)
      .then(res.json("Product Created"))
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    const { name, stock, price, category_id, transaksi_id } = req.body;
    productModel
      .update(id, name, stock, price, category_id, transaksi_id)
      .then(res.json("Product Updated"))
      .catch((err) => res.send(err));
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.id);
    productModel
      .deleteProduct(id)
      .then(res.json("Product Deleted"))
      .catch((err) => res.send(err));
  },
};

module.exports = productController;
