const Pool = require("../config/db");
const selectAll = () => {
  return Pool.query(`SELECT * FROM payment`);
};
const select = (id) => {
  return Pool.query(`select * from payment where id=${id}`);
};
const insert = (id, amount) => {
  return Pool.query(
    `INSERT INTO payment(id,amount) VALUES('${id}','${amount}')`
  );
};
const update = (id, amount) => {
  return Pool.query(`UPDATE payment SET amount='${amount}' WHERE id=${id}`);
};
const deletePayment = (id) => {
  return Pool.query(`DELETE FROM payment WHERE id=${id};`);
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  deletePayment,
};
