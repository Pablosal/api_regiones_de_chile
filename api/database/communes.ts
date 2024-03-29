import prisma from '../database/client';

class Communes {
    async getOneCommune(commune_code) {
        const commune = await prisma.commune.findUnique({
            where: {
                commune_code
            }
        })
        if (!commune) return 'A commune with that id was not found'
        return commune
    }
    async getAllCommunes(page?, amount?) {
        let communes

        if (!Number.isNaN(page)) {
            const amountOfSkips = (page - 1) * amount + 1.
            communes = await prisma.commune.findMany({
                skip: amountOfSkips,
                take: amount, select: {
                    id: true,
                    commune_code: true,
                    commune_identifier: true,
                    commune_name: true,
                    regionIso: true,

                },
                orderBy: {
                    commune_name: 'desc'
                }
            })
        } else {
            communes = await prisma.commune.findMany({
                select: {
                    id: true,
                    commune_code: true,
                    commune_identifier: true,
                    commune_name: true,
                    regionIso: true,

                },
                orderBy: {
                    commune_name: 'desc'
                }
            })

        }
        if (!communes.length) return 'There are no coomunes in the table yet'
        return communes

    }
    async getCommunesFromRegion(region_iso, page = 1, amount = 10) {
        const amountOfSkips = (page - 1) * amount + 1.
        const communesFR = await prisma.commune.findMany({
            where: {
                regionIso: region_iso
            },
            take: amount,
            skip: amountOfSkips

        })

        if (!communesFR.length) return 'This region has no communes'
        return communesFR
    }
    async getAllCommunesFromProvince(province_code) {
        const communesFromProvince = await prisma.commune.findMany({
            select: {
                id: true,
                commune_code: true,
                commune_identifier: true,
                commune_name: true,
                regionIso: true,

            },
            where: {
                provinceCode: province_code
            }
        })
        if (!communesFromProvince.length) return 'This province does not have any commune'
        return communesFromProvince
    }
    async addMultipleCommunes(communes) {
        const registers = await prisma.commune.createMany({ data: communes })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const communes = new Communes();
export default communes;
