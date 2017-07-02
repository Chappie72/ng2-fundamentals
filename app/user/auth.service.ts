import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor() { }

    loginUser(userName:string, password:string) {
        this.currentUser = {
            id: 1,
            userName: 'Bob',
            firstName: 'Bob',
            lastName: 'Builder'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
}