import $api from "../http";


export default class HouseService {
    static async getHouses() {
        const response = await $api.get('/houses');
        console.log(response.data);
        return response.data;
    }

    static async addHouse(house) {

        const {

                name,
            description,
            image,
            price,
            area,
            numberOfRooms,
            numberOfFloors,
            landPlotSize,
            materialId,
            developerId,
            districtId

    } = house;

        console.log(name,
            description,
            image,
            price,
            area,
            numberOfRooms,
            numberOfFloors,
            landPlotSize,
            materialId,
            developerId,
            districtId)

        return $api.post('/houses', {
            name,
            description,
            image,
            price,
            area,
            numberOfRooms,
            numberOfFloors,
            landPlotSize,
            materialId,
            developerId,
            districtId
        })

    }

    static async updateHouse(house) {

        const {id,
            name,
            description,
            image,
            price,
            area,
            numberOfRooms,
            numberOfFloors,
            landPlotSize,
            materialId,
            developerId,
            districtId} = house;

        console.log(description)
        return $api.put(`/houses/${id}`, {
            name,
            description,
            image,
            price,
            area,
            numberOfRooms,
            numberOfFloors,
            landPlotSize,
            materialId,
            developerId,
            districtId
        })

    }

    static async deleteHouse(id) {
        return $api.delete(`/house/${id}`)
    }
}