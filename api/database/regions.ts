import prisma from '../database/client';
// Get all communes from one region or multiple regions
class Region {
    constructor() {
        // this.tsRegiones = JSON.parse(regiones);
    }
    async addCountry() {
        await prisma.country.create({
            data:
            {
                id: "2880298a-0884-4701-b92a-fe964c5f5eca",
                country_name: "Chile",
                number_of_regions: 16,

            }
        })
    }
    async getOneRegion(region_iso) {
        const region = await prisma.region.findFirst({
            where: {
                region_iso_3166_2: region_iso
            }
        })
        if (!region) return 'A region with that id was not found'
        return region
    }
    async getAllRegions(page = 1, amount = 6) {
        let regions
        if (!Number.isNaN(page)) {
            const amountOfSkips = (page - 1) * amount + 1.
            regions = await prisma.region.findMany({
                skip: amountOfSkips,
                take: amount,
                select: {
                    id: true,
                    region_iso_3166_2: true,
                    region_name: true,
                    region_number: true
                },
                orderBy: {
                    roman_number: 'desc'
                }
            })
        } else {
            regions = await prisma.region.findMany({
                select: {
                    id: true,
                    region_iso_3166_2: true,
                    region_name: true,
                    region_number: true
                },
                orderBy: {
                    roman_number: 'desc'
                },
            })

        }
        if (!regions.length) return 'There are no regions to send'
        return regions

    }
    async addMultipleRegions(regions) {
        if (!regions) throw new Error("Dude you got to put the regions");
        const registers = await prisma.region.createMany({ data: regions })


        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const region = new Region();
export default region;
