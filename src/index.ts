import Express from "express";
import bodyParser from "body-parser";
import { router as controllerRouter } from "./controllers/decorators/controller";
import "./controllers/LoginController";

const app = Express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(controllerRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
