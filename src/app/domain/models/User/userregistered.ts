import { User } from "./user";

export class UserRegistered extends User {
    _id!: string;
    createdAt!: Date;
    updateAt!: Date;
}