import { getRepository } from "typeorm";
import User from '../models/User';
import ListUser from '../views/ListUser';
import { Request, Response } from "express";

const listAll = async (req: Request, res: Response) => {
    const repository = getRepository(User);
    const users = await repository.find();
    return res.status(200).json(ListUser.render(users));
}

export default listAll;