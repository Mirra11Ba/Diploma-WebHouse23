import $api from "../http";


export default class DistrictService {
    static async getDistricts() {
        const response = await $api.get('/districts');
        console.log(response.data);
        return response.data;
    }
}