import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import clientsRouter from "./work/routes/client.route.js";
import productsRouter from "./work/routes/product.route.js";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/products", productsRouter);
if (typeof process.env.ENV === "undefined") {
  // not running on Lambda - Probably Localy

  // start server (only for local development)
  const port = 3000;
  const server = app.listen(port, async () => {
    console.log("Server listening on port " + port);
  });
}

export default { app };
