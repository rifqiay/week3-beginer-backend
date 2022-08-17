const Pool = require("../config/db");
const selectAll = () => {
  return Pool.query(`SELECT * FROM transaksi_detail`);
};
const select = (id) => {
  return Pool.query(`select * from transaksi_detail where id=${id}`);
};
const insert = (id, total, payment_id) => {
  return Pool.query(
    `INSERT INTO transaksi_detail(id,total) VALUES(${id},${total},${payment_id})`
  );
};
const update = (id, total, payment_id) => {
  return Pool.query(
    `UPDATE transaksi_detail SET total=${total},payment_id=${payment_id} WHERE id=${id}`
  );
};
const deletetransaksi_detail = (id) => {
  return Pool.query(`DELETE FROM transaksi_detail WHERE id=${id};`);
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  deletetransaksi_detail,
};
