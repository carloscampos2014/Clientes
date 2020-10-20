import { Request, Response } from "express";
import listAll from "../../services/listAll";
import listOne from "../../services/listOne";
import create from "../../services/create";
import remove from "../../services/remove";
import update from "../../services/update";

export default {
  async index(req: Request, res: Response) {
    await listAll(req, res);
  },

  async one(req: Request, res: Response) {
    await listOne(req, res);
  },

  async add(req: Request, res: Response) {
    await create(req, res);
  },

  async updade(req: Request, res: Response) {
    await update(req, res);
  },

  async remove(req: Request, res: Response) {
    await remove(req, res);
  },
};
