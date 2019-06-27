const { insert } = require('./friends-model')
const supertest = require('supertest')
const db = require('../data/dbConfig.js')
const server = require('../api/server.js')

describe(' friends model ', () => {
    beforeEach(async () => {
        await db('friends').truncate();
    })

    var token = null;
    describe('token test', () => {
        beforeAll(function (done) {
            request(url)
                .post('/auth/register')
                .send({ _id: user1._id, password: user1.password })
                .end(function (err, res) {
                    token = res.body.token; 
                    done();
                });
        });

        it('should get a valid token for user: user1', function (done) {
            request('/get/user')
                .set(token)
                .expect(200, done);
        });
    })



    it('should switch env to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET', () => {
        it('blocks a user who isnt logged in', () => {
            return supertest(server).get('/friends').expect(400)
        })

    })



})