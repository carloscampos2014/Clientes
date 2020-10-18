import { getRepository } from "typeorm";
import User from '../models/User';
import * as Yup from "yup";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    const repository = getRepository(User)

    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Nome é Obrigatorio!")
            .min(5, "Nome deve ter no minimo 5 Letras!"),
        email: Yup.string()
            .required("E-mail é Obrigarorio!")
            .email("E-mail Invalido!"),
        password: Yup.string()
            .required("Senha é Obrigatoria")
            .min(6, "A Senha deve ter no minimo 6 Caracteres!")
            .max(14, "A Senha deve ter no maximo 14 Caracteres!")
    });

    const data = {
        name,
        email,
        password
    }


    await schema.validate(data, {
        abortEarly: false,
    });

    const user = await repository.create(data);
    await repository.save(user);

    return res.status(201).json(user);
}

export default create;