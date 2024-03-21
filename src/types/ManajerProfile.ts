import { Address } from "./Address";

export type ManajerProfile = {
    email: string;
    name: string;
    phone: string;
    image: string;
    birthDate: Date;
    password: string;
    address: Address;
}

