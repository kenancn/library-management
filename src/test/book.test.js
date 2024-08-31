const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Books API', () => {
    it('should create a new book', (done) => {
        chai.request(app)
            .post('/books')
            .send({ name: 'Test Book' })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('Test Book');
                done();
            });
    });

    it('should list all books', (done) => {
        chai.request(app)
            .get('/books')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
    it('should get a book by ID', (done) => {
        const bookId = 2; 
        chai.request(app)
            .get(`/books/${bookId}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').eql(bookId);
                done();
            });
    });
    it('should return 404 when book ID does not exist', (done) => {
        const invalidBookId = 9999; // Var olmayan bir ID
        chai.request(app)
            .get(`/books/${invalidBookId}`)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('error');
                done();
            });
    });
    it('should not create a book with invalid data', (done) => {
        chai.request(app)
            .post('/books')
            .send({}) // Eksik name alanı
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('error');
                done();
            });
    });
    it('should update a book by ID', (done) => {
        const bookId = 2; // Gerçek bir kitap ID'sini kullanın
        const updatedBook = {
            name: 'Updated Test Book'
        };
        chai.request(app)
            .put(`/books/${bookId}`)
            .send(updatedBook)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('Updated Test Book');
                done();
            });
    });
    it('should return 404 when trying to update a non-existent book', (done) => {
        const invalidBookId = 9999; // Var olmayan bir ID
        chai.request(app)
            .put(`/books/${invalidBookId}`)
            .send({ name: 'Non-existent Book' })
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('error').eql('Kitap bulunamadı.');
                done();
            });
    });
    it('should return 404 when trying to delete a non-existent book', (done) => {
        const invalidBookId = 9999; // Var olmayan bir ID
        chai.request(app)
            .delete(`/books/${invalidBookId}`)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('error').eql('Kitap bulunamadı.');
                done();
            });
    });
            

});
