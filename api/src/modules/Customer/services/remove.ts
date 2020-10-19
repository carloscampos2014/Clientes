import { getRepository } from "typeorm";
import User from "../models/User";
import OneUser from "../views/OneUser";
import { Request, Response } from "express";

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const repository = getRepository(User);

  const user = await repository.findOneOrFail(id);
  await repository.remove(user);

  return res.status(200).json(OneUser.render(user));
};

export default remove;
