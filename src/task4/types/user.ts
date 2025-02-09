import { Employment } from "./user-employment";
import { Address } from "./user-address";
import { CreditCard } from "./user-creditcard";
import { Subscription } from "./user-subscription";

export type User = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: CreditCard;
  subscription: Subscription;
};
