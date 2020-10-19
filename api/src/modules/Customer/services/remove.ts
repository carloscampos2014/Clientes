import { getRepository } from "typeorm";
import Customer from "../models/Customer";
import OneCustomer from "../views/OneCustomer";
import { Request, Response } from "express";

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const repository = getRepository(Customer);

  const customer = await repository.findOneOrFail(id);
  await repository.remove(customer);

  return res.status(200).json(OneCustomer.render(customer));
};

export default remove;
