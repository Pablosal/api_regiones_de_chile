import communes from "../database/communes"

class CommunesService {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async getOneCommune(commune_code) {
        const regionFromDb = await communes.getOneCommune(commune_code)
        return regionFromDb
    }
    async getAllCommunes(page = 1, amount = 6) {
        const regions = await communes.getAllCommunes(page, amount)
        return regions


    }
    async addMultipleCommunes(regions) {
        const records = await communes.addMultipleCommunes(regions)
        return records
    }
}

const communesService = new CommunesService()
export default communesService