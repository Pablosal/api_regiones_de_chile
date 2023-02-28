import communes from "../database/communes"

class CommunesService {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async getOneCommune(regionId) {
        const regionFromDb = await communes.getOneCommune(regionId)
        return regionFromDb
    }
    async getAllCommunes() {
        const regions = await communes.getAllCommunes()
        return regions


    }
    async addMultipleCommunes(regions) {
        const records = await communes.addMultipleCommunes(regions)
        return records
    }
}

const communesService = new CommunesService()
export default communesService