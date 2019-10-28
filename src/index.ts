import Express from "express";
import bodyParser from "body-parser";
import AppRouter from "./AppRouter";
import "./controllers/LoginController";

const app = Express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(AppRouter.getInstance()); // using singleton router

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
