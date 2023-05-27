import $api from "../http";


export default class UserService {
    static async getUserList() {
        const response = await $api.get('/users');
        console.log(response.data);
        return response.data
    }

    static async getUser() {
        const response = await $api.get('/users/me');
        console.log(response.data)
        return response.data
    }

    static async changeLogin(login) {
        return $api.post('/users/change_login', {login})
    }

    static async changeName(name, surname, patronymic) {
        return $api.post('/users/change_name', {name, surname, patronymic})
    }

    static async changePassword(password) {
        return $api.post('/users/change_password', {password})
    }
}