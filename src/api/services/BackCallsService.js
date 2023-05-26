import $api from "../http";


export default class BackCallsService {
    static async getBackCalls() {
        const response = await $api.get('/back_calls');
        console.log(response.data);
        return response.data;
    }

    static async addBackCall(phone, name, email) {
        return $api.post('/back_calls', {
            phone,
            name,
            email
        });
    }

    static async changeStatus(callId, statusId) {
        return $api.post(`/back_calls/${callId}/${statusId}`)
    }
}