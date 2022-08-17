require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const categoryRouter = require("./src/routes/category");
const productsRouter = require("./src/routes/product");
const transactionRouter = require("./src/routes/transaksi");
const paymentRouter = require("./src/routes/payment");
const transaksi_detail = require("./src/routes/transaksi_detail");

app.use("/category", categoryRouter);
app.use("/product/", productsRouter);
app.use("/transactions", transactionRouter);
app.use("/transaksi-detail", transaksi_detail);
app.use("/payment", paymentRouter);

//error handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const host = process.env.DB_HOST;
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on http://${host}:${port}`);
});
