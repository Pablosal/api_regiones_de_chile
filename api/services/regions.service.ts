import region from "../database/regions";

class RegionService {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    // async getCommunesFromRegion(regionId) {
    //     const communesFR = await region.getCommunesFromRegion(regionId)
    //     return communesFR


    // }
    // async getProvincesFromRegion(regionId) {
    //     const provincesFR = await region.getProvincesFromRegion(regionId)
    //     return provincesFR


    // }
    async getOneRegion(regionId) {
        const regionFromDb = await region.getOneRegion(regionId)
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