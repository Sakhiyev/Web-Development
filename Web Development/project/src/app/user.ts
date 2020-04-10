import { Bear } from './bear';

export interface User {
    id: number;
    login: string;
    password: string;
    name: string;
    last_name: string;
    email: string;
    image: string;
    saved_bears: Bear[];
    user_bears: Bear[];
}


