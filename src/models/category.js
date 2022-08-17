const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby }) => {
  return Pool.query(
    `SELECT * FROM category ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};
const select = (id) => {
  return Pool.query(`select * from category where id=${id}`);
};
const insert = (id, name) => {
  return Pool.query(`INSERT INTO category(id,name) VALUES('${id}','${name}')`);
};
const update = (id, name) => {
  return Pool.query(`UPDATE category SET name='${name}' WHERE id=${id}`);
};
const deleteCategory = (id) => {
  return Pool.query(`DELETE FROM category WHERE id=${id}`);
};
const countCategory = () => {
  return Pool.query(`select count(*) from category`);
};

module.exports = {
  selectAll,
  select,
  insert,
  update,
  deleteCategory,
  countCategory,
};
