import house from "../store/house";
import StatusService from "../api/services/StatusService";
import district from "../store/district";
import material from "../store/material";
import status from "../store/status";
import developer from "../store/developer";


export default async function fetchData() {
    await house.fetchHouses();
    await district.fetchDistricts();
    await material.fetchMaterials();
    await status.fetchStatuses();
    await developer.fetchDevelopers();
}