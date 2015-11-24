var linAlg = require('./main.js');
var expect = require('chai').expect;

describe('Main Suite of tests', function () {
    describe('testing basic set up', function () {
        var LA;
        before(function (done) {
            LA = new linAlg();
            done();
        });
        it('linAlg is an object', function (done) {
            expect(typeof LA).to.equal('object');
            done();
        });
    });
    describe('Function: vectAdd', function () {
        var LA;
        before(function (done) {
            LA = new linAlg();
            done();
        });
        it('has a function vectAdd', function (done) {
            expect(typeof LA.vectAdd).to.equal('function');
            done();
        });
        it('computes basic vector addition', function (done) {
            var vect1 = [1,1,1];
            var vect2 = [2,2,2];
            var result = LA.vectAdd([vect1, vect2]);
            expect(result).to.be.instanceof(Array);
            expect(result).to.eql([3,3,3]);
            done();
        });
        it('throws an error when the vectors are different lengths', function (done) {
            var vect1 = [1];
            var vect2 = [1,2];
            expect(LA.vectAdd.bind(LA,[vect1, vect2])).to.throw(Error);
            done();
        })
    });
    describe('Function: vectSub', function () {
        var LA;
        before(function (done) {
            LA = new linAlg();
            done();
        });
        it('has a function vectSub', function (done) {
            expect(typeof LA.vectSub).to.equal('function');
            done();
        });
        it('computes basic vector subtraction', function (done) {
            var vect1 = [1,1,1];
            var vect2 = [2,2,2];
            var result = LA.vectSub([vect1, vect2]);
            expect(result).to.be.instanceof(Array);
            expect(result).to.eql([-1,-1,-1]);
            done();
        });
        it('throws an error when the vectors are different lengths', function (done) {
            var vect1 = [1];
            var vect2 = [1,2];
            expect(LA.vectSub.bind(LA,[vect1, vect2])).to.throw(Error);
            done();
        })
    });
    describe('Function: scalarMult', function () {
        var LA;
        before(function (done) {
            LA = new linAlg();
            done();
        });
        it('has a function scalarMult', function (done) {
            expect(typeof LA.scalarMult).to.equal('function');
            done();
        });
        it('computes basic scalar multiplication', function (done) {
            var arrs = [[1,1,1]];
            var scalar = 2;
            var result = LA.scalarMult(scalar, arrs);
            expect(result).to.be.instanceof(Array);
            expect(result).to.eql([[2,2,2]]);
            done();
        });
    })
});