import { Router } from "express";
import CustomerControler from "./controllers/CustomerController";

const routes = Router();

routes.get("/customers/", CustomerControler.index);
routes.get("/customers/:id", CustomerControler.one);

routes.post("/customers/", CustomerControler.add);

routes.put("/customers/:id", CustomerControler.updade);

routes.delete("/customers/:id", CustomerControler.remove);

export default routes;
