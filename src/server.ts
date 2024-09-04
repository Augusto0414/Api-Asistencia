import pool from "./database/config";
import app from "./app";
(() => {
  pool
    .initialize()
    .then(() => console.log("Initialized pool ok!"))
    .catch(() => console.log("Error initialization pool!"));
  app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
  });
})();
