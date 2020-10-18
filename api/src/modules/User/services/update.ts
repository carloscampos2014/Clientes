import { getRepository } from "typeorm";
import User from '../models/User';
import OneUser from '../views/OneUser';
import * as Yup from "yup";
import { Request, Response } from "express";

const update = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, email, password} = req.body;

    const repository = getRepository(User);

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

    const user = await repository.findOneOrFail(id);
    
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    
    await repository.save(user);

    return res.status(200).json(OneUser.render(user));
}

export default update;