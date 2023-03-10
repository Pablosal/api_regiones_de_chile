import supertest from "supertest"
import { app, server } from "../api/app"
import data from '../allore.json'


const api = supertest(app)

describe("GET /regions", () => {
    afterAll(() => {

        server.close()
    })
    it("should respond with json", async () => {
        await api.
            get("/api/v1/regions")
            .expect(200)
            .expect("Content-Type", /application\/json/)
    })
    it('should return all the regions', async () => {
        const res = await api.get("/api/v1/regions")
        expect(res.body).toHaveLength(16)
    })
})