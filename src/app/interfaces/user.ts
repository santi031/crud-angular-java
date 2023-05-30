import { TypeUser } from "./type-user";

export interface User {
    idUsers: number;
    name: string;
    lastname: string;
    phone: number;
    email: string;
    idTypeUser?: number;
    typeUser: TypeUser;
}
