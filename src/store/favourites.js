import {makeAutoObservable} from "mobx";
import FavouritesService from "../api/services/FavouritesService";


class Favourites {

    favourites = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchFavourites() {
        this.favourites = await FavouritesService.getFavorites();
    }

}

export default new Favourites()