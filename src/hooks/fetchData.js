import house from "../store/house";


export default async function fetchData() {
    await house.fetchHouses();
}