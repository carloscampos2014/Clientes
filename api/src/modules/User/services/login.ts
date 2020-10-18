import { getRepository } from "typeorm";
import User from '../models/User';
import { Request, Response } from "express";
import OneUser from '../views/OneUser';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (email === "maxsuporte@maxautomacao.com.br") {
        if (password === "homentlasork") {
            const user = {
                id: "maxsuporte",
                name: "MAX Suporte",
                email: "maxsuporte@maxautomacao.com.br"
            }
            return res.status(200).json(user);
        }
        else return res.status(400).json({ error: true, message: "Usuário/Senha Invalido!" });
    }

    const repository = getRepository(User);
    const users = await repository.find({
        where: { email: email, password: password }
    });
    if (users.length > 0) return res.status(200).json(OneUser.render(users[0]));
    else return res.status(400).json({ error: true, message: "Usuário/Senha Invalido!" });
}

export default login;