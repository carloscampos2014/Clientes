import { getRepository } from "typeorm";
import Customer from "../models/Customer";
import * as Yup from "yup";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const {
    name,
    email,
    cellphone,
    phone,
    zipcode,
    number,
    address,
    district,
    city,
    state,
    country,
    user_id,
  } = req.body;
  let { complement, obs } = req.body;

  complement = complement ? "" : complement;
  obs = obs ? "SEM OBSERVAÇÃO" : obs;
  const repository = getRepository(Customer);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Nome é Obrigatorio!")
      .min(5, "Nome deve ter no minimo 5 Letras!"),
    email: Yup.string()
      .required("E-mail é Obrigarorio!")
      .email("E-mail Invalido!"),
    cellphone: Yup.string().required("Numero do Celular é Obrigatorio!"),
    phone: Yup.string().required("Numero do Telefone é Obrigatorio!"),
    zipcode: Yup.string().required("Numero do CEP é Obrigatorio!"),
    number: Yup.string().required("Numero do Endereço é Obrigatorio!"),
    address: Yup.string().required("Logradouro é Obrigatorio!"),
    district: Yup.string().required("Bairro é Obrigatorio!"),
    city: Yup.string().required("Municipio Obrigatorio!"),
    state: Yup.string().required("UF é Obrigatorio!"),
    country: Yup.string().required("País é Obrigatorio!"),
  });

  const data = {
    name: name.toString().toUpperCase(),
    email,
    cellphone,
    phone,
    zipcode,
    number,
    complement,
    address,
    district,
    city,
    state,
    country,
    obs,
    user_id,
  };

  await schema.validate(data, {
    abortEarly: false,
  });

  const user = await repository.create(data);
  await repository.save(user);

  return res.status(201).json(user);
};

export default create;
