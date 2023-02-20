const request = require('supertest')
const server = require('./app')


afterAll(()=>{
    server.close()
})

it('test', async()=>{
    const response = await request(server).get('/')

    expect(response.body.message).toEqual('welcome')
})