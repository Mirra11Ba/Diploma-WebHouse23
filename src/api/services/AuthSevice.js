import $api from "../http";


export default class AuthService {
    static async auth(login, password) {



        return $api.post('/users/auth', {
            login,
            password
        })
    }

    static async reg(
        name,
        surname,
        patronymic,
        login,
        password,
        phone
    ) {
        return $api.post('/users/reg', {
            name,
            surname,
            patronymic,
            login,
            password,
            phone
        })
    }


}