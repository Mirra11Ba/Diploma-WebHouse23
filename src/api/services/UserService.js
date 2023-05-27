import $api from "../http";


export default class UserService {
    static async getUsers() {
        const response = await $api.get('/users');
        console.log(response.data);
        return response.data
    }

    
}