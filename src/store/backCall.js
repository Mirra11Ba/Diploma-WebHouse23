import {makeAutoObservable} from "mobx";
import BackCallsService from "../api/services/BackCallsService";


class BackCall {

    backCalls = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchBackCalls() {
        this.backCalls = await BackCallsService.getBackCalls();
    }



}

export default new BackCall();