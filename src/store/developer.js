import {makeAutoObservable} from "mobx";
import DeveloperService from "../api/services/DeveloperService";

class Developer {

    developers = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchDevelopers() {
        this.developers = await DeveloperService.getDevelopers();
    }

}

export default new Developer();