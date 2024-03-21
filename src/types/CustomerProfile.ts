import React from "react";
import { Address } from "./Address";

export type CustomerProfile = {
    email: string;
    name: string;
    phone: string;
    image: string;
    birthDate: Date;
    password: string;
    isActive: boolean;
    address: Address;
    deliveryAddress?: Address;
}

export type CustomerProfileProps = {
    customerProfile:CustomerProfile
}