import { getRepository } from "typeorm";
import User from '../models/User';
import OneUser from '../views/OneUser';
import { Request, Response } from "express";

const listOne = async (req: Request, res: Response) => {
    const {id} = req.params;
    
    const repository = getRepository(User);
    const user = await repository.findOneOrFail(id);
    
    return res.status(200).json(OneUser.render(user));
}

export default listOne;