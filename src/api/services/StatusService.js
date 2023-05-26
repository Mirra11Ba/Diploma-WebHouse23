import $api from "../http";


export default class StatusService {
    static async getStatuses() {
        const response = await $api.get('/statuses');
        console.log(response.data);
        return response.data;
    }
}