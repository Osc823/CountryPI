const server = require('../src/server');
const session = require('supertest');
const agent = session(server);

describe("Routes testing", () => {
    describe("GET  countries/:id", () => {
        it("Respondee con status: 200" , async() => {
            await agent.get("/countries/ARG").expect(200)
        });

        it('Responde un objeto con las propiedades: "id", "name","image","continent","capital","population","activities"', async() =>{
            const response = await agent.get("/countries/ALA");
            const props  = ["id", "name","image","continent","capital","population","activities"];
            console.log('rr',response.body);

            props.forEach((prop) => expect(response.body).toHaveProperty(prop))
        })

        it('Si hay un error responde con status : 500', async() => {
            const response = await agent.get("/countries/AALAAA");
            expect(response.statusCode).toBeGreaterThan(400);
        })
    })

    describe("GET activities/:id", () => {
        it("Respondee con status: 200" , async() => {
            await agent.get("/activities/0587ab8d-7652-427c-8312-b71313ff8270").expect(200)
        });
        it('Responde un objeto con las propiedades: "id", "name","difficulty","duration","season","countries"', async() =>{
            const response = await agent.get("/activities/0587ab8d-7652-427c-8312-b71313ff8270");
            const props = ["id", "name","difficulty","duration","season","countries"]

            props.forEach((prop) => expect(response.body).toHaveProperty(prop))
        });
        it('Si hay un error responde con status : 500', async() => {
            const response = await agent.get("/activities/asadada");
            expect(response.statusCode).toBeGreaterThan(400);
        })
    })

    
})
