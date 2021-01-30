var chai = require('chai');

var expect = chai.expect;
var app = require('../app');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get Records', function () {

    describe('1. Bad Request', function () {
        var response;

        before(function (done) {
            chai.request(app)
                .get('/api/getData?q1=RandomStringWhichisnotpresent')
                .end(function (err, res) {
                    response = res;
                    done();
                });
        });
        it('Returns a 400', function () {
            expect(response.statusCode).to.equal(400);
        });
    });
    describe('2. With a Non-Existent Data', function () {
        var response;

        before(function (done) {
            chai.request(app)
                .get('/api/getData?q=RandomStringWhichisnotpresent')
                .end(function (err, res) {
                    response = res;
                    done();
                });
        });
        it('Returns an Empty Array', function () {
            expect(response.body.records).to.be.instanceof(Array);
            expect(response.body.records).to.have.length(0);
        });
    });

    describe('3. With a valid Name', function () {
        var response;

        before(function (done) {
            chai.request(app)
                .get('/api/getData?q=Richie')
                .end(function (err, res) {
                    response = res;
                    done(err);
                });
        });

        it('Returns a 200', function () {
            expect(response.statusCode).to.equal(200);
        });

        it('Returns an Array of Records', function () {
            expect(response.body.records).to.be.instanceof(Array);
            expect(response.body.records).to.have.length.above(0);
        });

        it('Contains a Match', function () {
            expect(response.body.records).to.satisfy(function (records) {
                return records.some(function (record) {
                    return (record.first_name.match(/rich/i) || record.last_name.match(/rich/i));
                });
            })
        });

        it('Contains Id and Email field', function () {
            expect(response.body.records).to.satisfy(function (records) {
                return records.every(function (record) {
                    return record.id && record.email;
                });
            })
        });
    });

    describe('4. Bad Request URL', function () {
        var response;

        before(function (done) {
            chai.request(app)
                .get('/api/getData1?q1=RandomStringWhichisnotpresent')
                .end(function (err, res) {
                    response = res;
                    done();
                });
        });
        it('Returns a 404', function () {
            expect(response.statusCode).to.equal(404);
        });
    });
});