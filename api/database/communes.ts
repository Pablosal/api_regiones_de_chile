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
                take: amount,
                orderBy: {
                    commune_name: 'desc'
                }
            })
        } else {
            communes = await prisma.commune.findMany({
                orderBy: {
                    commune_name: 'desc'
                }
            })

        }
        if (!communes.length) return 'There are no coomunes in the table yet'
        return communes

    }
    async addMultipleCommunes(regions) {
        const registers = await prisma.commune.createMany({ data: regions })
        if (!registers) throw new Error("There's was an error in the creation of the registers");
        return registers
    }

}
const communes = new Communes();
export default communes;
