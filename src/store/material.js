import {makeAutoObservable} from "mobx";
import MaterialService from "../api/services/MaterialService";


class Material {

    materials = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchMaterials() {
        this.materials = await MaterialService.getMaterials();
    }

}

export default new Material();