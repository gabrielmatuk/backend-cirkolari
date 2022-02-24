import pkg from "pg";
const { Pool } = pkg;

const connectionString =
  "postgres://kbuceotx:eE1ZLG9cIaojQ5xb2YaLnSSkQkal9B5t@castor.db.elephantsql.com/kbuceotx";
const connect = async () => {
  const pool = new Pool({
    connectionString,
  });
  console.log("Started connection with DB.");
  return pool.connect();
};
export { connect };
