import { connect } from "./db.js";

const createClient = async (client) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO clientes (nome, cpf, telefone, endereco, email) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      client.nome,
      client.cpf,
      client.telefone,
      client.email,
      client.endereco,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const showClients = async () => {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM clientes");
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const showClient = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM clientes WHERE cliente_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const deleteClient = async (id) => {
  const conn = await connect();
  try {
    await conn.query("DELETE FROM clientes WHERE cliente_id = $1", [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

const updateClient = async (client) => {
  const conn = await connect();
  try {
    const sql =
      "UPDATE clientes " +
      "   SET nome = $1, cpf = $2, telefone = $3, email = $4, endereco = $5 " +
      " WHERE cliente_id = $6 RETURNING *";
    const values = [
      client.nome,
      client.cpf,
      client.telefone,
      client.email,
      client.endereco,
      client.cliente_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};

export default {
  showClients,
  createClient,
  showClient,
  deleteClient,
  updateClient,
};
