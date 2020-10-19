import { getRepository } from "typeorm";
import Customer from "../models/Customer";
import OneCustomer from "../views/OneCustomer";
import * as Yup from "yup";
import { Request, Response } from "express";

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
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
  } = req.body;

  const repository = getRepository(Customer);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Nome é Obrigatorio!")
      .min(5, "Nome deve ter no minimo 5 Letras!"),
    email: Yup.string()
      .required("E-mail é Obrigarorio!")
      .email("E-mail Invalido!"),
    cellphone: Yup.string().required("Numero do Celular é Obrigatorio!"),
    phone: Yup.string().required("Numero do Celular é Obrigatorio!"),
    zipcode: Yup.string().required("Numero do Celular é Obrigatorio!"),
    number: Yup.string().required("Numero do Celular é Obrigatorio!"),
    address: Yup.string().required("Numero do Celular é Obrigatorio!"),
    district: Yup.string().required("Numero do Celular é Obrigatorio!"),
    city: Yup.string().required("Numero do Celular é Obrigatorio!"),
    state: Yup.string().required("Numero do Celular é Obrigatorio!"),
    country: Yup.string().required("Numero do Celular é Obrigatorio!"),
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
  };

  await schema.validate(data, {
    abortEarly: false,
  });

  const customer = await repository.findOneOrFail(id);

  customer.name = data.name;
  customer.email = data.email;
  customer.cellphone = data.cellphone;
  customer.phone = data.phone;
  customer.zipcode = data.zipcode;
  customer.number = data.number;
  customer.complement = data.complement;
  customer.address = data.address;
  customer.district = data.district;
  customer.city = data.city;
  customer.state = data.state;
  customer.country = data.country;
  customer.obs = data.obs;

  await repository.save(customer);

  return res.status(200).json(OneCustomer.render(customer));
};

export default update;
