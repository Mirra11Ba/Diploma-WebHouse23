import $api from "../http";


export default class MaterialService {
    static async getMaterials() {
        const response = await $api.get('/materials');
        console.log(response.data);
        return response.data;
    }
}