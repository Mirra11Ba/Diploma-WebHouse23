import $api from "../http";


export default class DeveloperService {
    static async getDevelopers() {
        const response = await $api.get('/developers');
        console.log(response.data);
        return response.data;
    }
}