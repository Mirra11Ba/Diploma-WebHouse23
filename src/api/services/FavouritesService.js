import $api from "../http";


export default class FavoriteService {
    static async getFavorites() {
        const response = await $api.get('/favourites');
        console.log(response.data)
        return response.data
    }

    static async addFavourite(houseId) {
        return $api.post(`/favourites/${houseId}`)
    }

    static async deleteFavourite(houseId) {
        console.log(houseId)
        return $api.delete(`/favourites/${houseId}`)
    }
}

