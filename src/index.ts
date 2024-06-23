import express from "express";
const app = express();
const port = 3000;
import routes from "./routes";

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
