import { observable } from "mobx";
import { asyncAction } from "mobx-utils";
import { User } from "app";
import { userAPI } from "../api";

export class UserStore {
    @observable user: User = { name: null };

    constructor() {
        this.getUser();
    }

    @asyncAction
    *getUser() {
        this.user = yield userAPI.getUser();
    }
}
