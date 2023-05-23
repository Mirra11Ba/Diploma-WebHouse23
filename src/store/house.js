import {makeAutoObservable} from "mobx";
import HouseService from "../api/services/HouseService";


class House {

    houses = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchHouses() {
        this.houses = await HouseService.getHouses();
    }

}

export default new House();