import prisma from '../database/client';
// Get all communes from one region or multiple regions
class Region {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async getCommunesFromRegion(regionId) {
        const communesFR = await prisma.region.findMany({
            where: {
                id: regionId
            },
            select: {
                communes: true
            }
        })
        if (!communesFR.length) return 'This region has no communes'
        return communesFR
    }
    async getProvincesFromRegion(regionId) {
        const provincesFR = await prisma.region.findMany({
            where: {
                id: regionId
            },
            select: {
                provinces: true
            }
        })
        if (!provincesFR.length) return 'This region has no provinces'
    }
    async getOneRegion(regionId) {
        const region = await prisma.region.findUnique({
            where: {
                id: regionId
            }
        })
        if (!region) return 'A region with that id was not found'
        return region
    }
    async getAllRegions() {
        const regions = await prisma.region.findMany()
        if (!regions.length) return 'There are no regions in the table yet'
        return regions

    }
    async addMultipleRegions(regions) {
        const registers = await prisma.region.createMany({ data: regions })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const region = new Region();
export default region;
