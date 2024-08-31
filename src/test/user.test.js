const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Users API', () => {
    // Kullanıcı oluşturma testi
    it('should create a new user', (done) => {
        chai.request(app)
            .post('/users')
            .send({ name: 'Test User' })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('Test User');
                done();
            });
    });

    // Geçersiz bir kullanıcı oluşturmayı deneme testi
    it('should not create a user with an invalid name', (done) => {
        chai.request(app)
            .post('/users')
            .send({ name: 'A' }) // İsim çok kısa
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('error');
                done();
            });
    });

    // Kullanıcıları listeleme testi
    it('should list all users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Belirli bir kullanıcıyı getirme testi
    it('should get a user by ID', (done) => {
        // Önceden oluşturulmuş bir kullanıcı varsa ID'yi girin
        const userId = 1;
        chai.request(app)
            .get(`/users/${userId}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').eql(userId);
                done();
            });
    });

    // Geçersiz bir kullanıcı ID'siyle kullanıcıyı getirme testi
    it('should return 404 when user ID does not exist', (done) => {
        const invalidUserId = 9999;
        chai.request(app)
            .get(`/users/${invalidUserId}`)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('error');
                done();
            });
    });
});
