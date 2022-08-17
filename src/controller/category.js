const categoryModel = require("../models/category");
const categoryController = {
  getAllCategory: async (request, response) => {
    try {
      const page = Number(request.query.page) || 1;
      const limit = Number(request.query.limit) || 5;
      const offset = (page - 1) * limit;
      const sortby = request.query.sortby || "name";
      const sort = request.query.sort || "asc";
      console.log(sort);
      const result = await categoryModel.selectAll({
        limit,
        offset,
        sort,
        sortby,
      });
      const {
        rows: [count],
      } = await categoryModel.countCategory();
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
  getCategory: (req, res) => {
    const id = Number(req.params.id);
    categoryModel
      .select(id)
      .then((result) => res.json(result.rows))
      .catch((err) => res.send(err));
  },
  insert: (req, res) => {
    const { id, name } = req.body;
    categoryModel
      .insert(id, name)
      .then(res.json("Category created"))
      .catch((err) => res.send(err));
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    categoryModel
      .update(id, name)
      .then(res.json("Category updated"))
      .catch((err) => res.send(err));
  },
  delete: (req, res) => {
    const id = Number(req.params.id);
    categoryModel
      .deleteCategory(id)
      .then(res.json("Category deleted"))
      .catch((err) => res.send(err));
  },
};

module.exports = categoryController;
