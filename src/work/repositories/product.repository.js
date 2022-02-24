import { connect } from "./db.js";

const insertProduct = async (product) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO produtos(nome,descricao, disponibilidade) VALUES ($1, $2, $3) RETURNING *";
    const values = [product.nome, product.descricao, product.disponibilidade];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const showProducts = async () => {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM produtos");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const showProduct = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM produtos WHERE produto_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const updateProduct = async (product) => {
  const conn = await connect();
  try {
    const sql =
      "UPDATE produtos " +
      "   SET nome = $1, descricao = $2, disponibilidade = $3 " +
      " WHERE produto_id = $4 RETURNING *";
    const values = [
      product.nome,
      product.descricao,
      product.disponibilidade,
      product.produto_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const productDisponibility = async (productStatus) => {
  const conn = await connect();
  try {
    const sql =
      "UPDATE produtos " +
      "   SET disponibilidade = $1 " +
      " WHERE produto_id = $2 RETURNING *";
    const values = [productStatus.disponibilidade, productStatus.produto_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

export default {
  insertProduct,
  showProducts,
  showProduct,
  updateProduct,
  productDisponibility,
};
