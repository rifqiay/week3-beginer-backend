const Pool = require("../config/db");

const selectAll = ({ limit, offset, sort, sortby }) => {
  return Pool.query(
    `SELECT * FROM product ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};

const select = (id) => {
  return Pool.query(`SELECT * FROM product where id=${id}`);
};

const insert = (id, name, stock, price, category_id, transaction_id) => {
  return Pool.query(
    `INSERT INTO product VALUES(${id},'${name}',${stock},${price},${category_id},${transaction_id})`
  );
};

const update = (id, name, stock, price, category_id, transaksi_id) => {
  return Pool.query(
    `update product set name='${name}',stock=${stock},price=${price},category_id=${category_id},transaksi_id=${transaksi_id} where id=${id};`
  );
};

const deleteProduct = (id) => {
  return Pool.query(`DELETE FROM product where id='${id}'`);
};

const countProduct = () => {
  return Pool.query(`select count(*) from product`);
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  deleteProduct,
  countProduct,
};
