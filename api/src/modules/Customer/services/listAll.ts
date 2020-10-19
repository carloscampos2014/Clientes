import { getRepository, Like } from "typeorm";
import Customer from "../models/Customer";
import ListCustomer from "../views/ListCustomer";
import { Request, Response } from "express";

const listAll = async (req: Request, res: Response) => {
  const { user } = req.params;
  const { name } = req.query;

  const repository = getRepository(Customer);
  let customers = await repository.find({ where: { user_id: user } });
  if (name)
    customers = await repository.find({
      where: { user_id: user, name: Like(name.toString().toUpperCase()) },
    });
  return res.status(200).json(ListCustomer.render(customers));
};

export default listAll;
