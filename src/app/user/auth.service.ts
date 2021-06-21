import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()

export class AuthService {
    currentUser: any;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Nina',
            lastName: 'Cressoni'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}