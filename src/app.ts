import express from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./route";
import deSerializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(deSerializeUser)

app.listen(port, async () => {
  log.info("App is running");

  await connect();
  routes(app);
});
