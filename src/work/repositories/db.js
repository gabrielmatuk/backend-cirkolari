import pkg from "pg";
const { Pool } = pkg;

const connectionString =
  "";
const connect = async () => {
  const pool = new Pool({
    connectionString,
  });
  console.log("Started connection with DB.");
  return pool.connect();
};
export { connect };
