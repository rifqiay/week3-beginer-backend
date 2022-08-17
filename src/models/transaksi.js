const Pool = require("../config/db");
const showAlltransaksi = ({ limit, offset, sort, sortby }) => {
  return Pool.query(
    `SELECT * FROM transaksi ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};

const showTransaksi = (id) => {
  return Pool.query(`select * from transaksi where id=${id}`);
};

const insertTransaksi = (id, adress, transaksi_detail_id) => {
  return Pool.query(
    `insert into transaksi values(${id},'${adress}',${transaksi_detail_id})`
  );
};

const updateTransaksi = (id, adress, transaksi_detail_id) => {
  return Pool.query(
    `update transaksi set adress='${adress}', transaksi_detail_id=${transaksi_detail_id} where id=${id}`
  );
};

const deleteTransaksi = (id) => {
  return Pool.query(`DELETE FROM transaksi where id=${id}`);
};

const countTransaksi = () => {
  return Pool.query(`select count(*) from product`);
};

module.exports = {
  showAlltransaksi,
  showTransaksi,
  insertTransaksi,
  updateTransaksi,
  deleteTransaksi,
  countTransaksi,
};
