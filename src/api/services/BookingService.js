import $api from "../http";


export default class BookingService {

    static async createBooking(timestamp, houseId) {

        return $api.post('/booking_to_show', {
            timestamp,
            houseId
        })

    }

    static async getBookings() {
        const response = await $api.get('/booking_to_show', {
            params: {
                admin: true

            }
        });
        console.log(response.data)
        return response.data;
    }

}