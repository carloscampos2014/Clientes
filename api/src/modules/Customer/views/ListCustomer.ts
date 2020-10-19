import Customer from "../modelsCustomer";
import OneCustomer from "./OneCustomer";

export default {
  render(customers: Customer[]) {
    return customers.map((customer) => OneCustomer.render(customer));
  },
};
