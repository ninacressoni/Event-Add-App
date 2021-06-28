import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()

export class AuthService {
    currentUser: any;
  firstName: any;
  lastName: any;
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

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}