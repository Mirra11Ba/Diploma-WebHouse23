import {makeAutoObservable} from "mobx";
import DistrictService from "../api/services/DistrictService";

class District {

    districts = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchDistricts() {
        this.districts = await DistrictService.getDistricts();
    }

}

export default new District();