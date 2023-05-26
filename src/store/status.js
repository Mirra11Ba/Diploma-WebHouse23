import {makeAutoObservable} from "mobx";
import StatusService from "../api/services/StatusService";


class Status {

    statuses = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchStatuses() {
        this.statuses = await StatusService.getStatuses();
    }

}

export default new Status();