import region from "../database/regions";

class RegionService {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async getCommunesFromRegion(region_iso, page = 1, amount = 10) {
        const communesFR = await region.getCommunesFromRegion(region_iso, page, amount)
        return communesFR
    }
    async getProvincesFromRegion(region_iso, page = 1, amount = 10) {
        const provincesFR = await region.getProvincesFromRegion(region_iso, page, amount)
        return provincesFR


    }
    async getOneRegion(region_iso) {
        const regionFromDb = await region.getOneRegion(region_iso)
        return regionFromDb
    }
    async getAllRegions(page, amount) {
        const regions = await region.getAllRegions(page, amount)
        return regions


    }
    async addMultipleRegions(regions) {
        const records = await region.addMultipleRegions(regions)
        return records
    }
}

const regionService = new RegionService()
export default regionService