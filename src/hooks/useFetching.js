import house from "../store/house";


export default async function useFetching() {
    await house.fetchHouses();
}