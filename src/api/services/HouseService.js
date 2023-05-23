import $api from "../http";


export default class HouseService {
    static async getHouses() {
        const response = await $api.get('');
        console.log(response.data);
        return response.data;
    }
}