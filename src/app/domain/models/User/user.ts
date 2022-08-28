import { UserRegistered } from "./userregistered";

export class User {
    name!: string;
    documentType!: string;
    document!: string;
    email!: string;
    password!: string;
    phone!: string;
    role!: number;
}

export class UserResponse {
    user!: UserRegistered;
}