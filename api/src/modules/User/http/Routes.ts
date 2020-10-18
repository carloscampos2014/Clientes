import { Router } from "express";
import UserControler from './controllers/UserController';

const routes = Router();

routes.get("/users", UserControler.index);
routes.get("/users/:id", UserControler.one);

routes.post("/users/login", UserControler.login);
routes.post("/users", UserControler.add);

routes.put("/users/:id", UserControler.updade);

routes.delete("/users/:id", UserControler.remove);

export default routes;
