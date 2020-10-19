import Customer from "../models/Customer";

export default {
  render(customer: Customer) {
    return {
      id: customer.id,
      Name: customer.name,
      Email: customer.email,
      Phones: `${customer.cellphone}/${customer.phone}`,
      FullAddress: `${customer.address}, ${customer.number}${
        customer.complement ? "" : customer.complement
      } - ${customer.district}/${customer.state}`,
      CellPhone: customer.cellphone,
      Phone: customer.phone,
      Zipcode: customer.zipcode,
      Number: customer.number,
      Complement: customer.complement,
      Address: customer.address,
      District: customer.district,
      City: customer.city,
      State: customer.state,
      Country: customer.country,
      Obs: customer.obs,
    };
  },
};
