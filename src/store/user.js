import {makeAutoObservable} from "mobx";
import UserService from "../api/services/UserService";
import AuthService from "../api/services/AuthSevice";


class User {

    user = {isAuth: false}
    users = []

    constructor() {
        makeAutoObservable(this)
    }

    async login(login, password) {
        try {
            const response = await AuthService.auth(login, password)
            console.log(response);
            localStorage.setItem('token', response.data.token)
            this.user.isAuth = true;
            return true;
        } catch (e) {
            return false;
        }

    }

    async reg(name, lastName, patronymic, login, password, phone) {
        try {
            const response = await AuthService.reg(name, lastName, patronymic, login, password, phone)
            console.log(response);
            localStorage.setItem('token', response.data.token)
            this.user.isAuth = true;
            return true;
        } catch (e) {

        }
    }

    checkAuth() {

        if (localStorage.getItem('token')) {
            this.user.isAuth = true;
        }

    }

    logout() {
        localStorage.clear()
        this.user.isAuth = false;
    }

    async loginWithService(url) {
        try {
            await window.location.replace(url);
            console.log(window.location.toString());
        } catch (e) {

        }
    }

}

export default new User();