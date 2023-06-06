import BookingService from "../api/services/BookingService";


class Booking {

    bookings = [];

    async fetchBookings() {

        this.bookings = await BookingService.getBookings();

    }

}

export default new Booking();