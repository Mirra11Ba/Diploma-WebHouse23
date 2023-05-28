import {makeAutoObservable} from "mobx";
import UserService from "../api/services/UserService";
import AuthService from "../api/services/AuthSevice";
import favourites from "./favourites";


class User {

    currentUser = {};
    isAuth = false;
    users = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchUser() {
        this.currentUser = await UserService.getUser();
    }

    async fetchUserList() {
        this.users = await UserService.getUserList()
    }

    async login(login, password) {
        try {
            const response = await AuthService.auth(login, password)
            console.log(response);
            localStorage.setItem('token', response.data.token)
            this.isAuth = true;
            await this.fetchUser()
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
            this.isAuth = true;
            await this.fetchUser()
            return true;
        } catch (e) {

        }
    }

    async checkAuth() {

        if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined' ) {
            this.isAuth = true;
            await this.fetchUser()
            await favourites.fetchFavourites();
        }
    }

    logout() {
        localStorage.clear()
        this.isAuth = false;
        this.currentUser = {};
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