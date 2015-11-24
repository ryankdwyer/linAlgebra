'use strict'

function LinAlg() {

}

/**
* Vector Additon
* @param: vectors, an array of vectors, where each element is of equal length
* */

LinAlg.prototype.vectAdd = function (vectors) {
    var result = [],
        value = 0,
        vectLen = vectors[0].length,
        numVectors = vectors.length;
    for (let i = 0; i < vectLen; i++) {
        for (let j = 0; j < numVectors; j++) {
            if(vectors[j].length !== vectLen) {
                throw new Error('Vectors lengths do not match!');
            } else {
                value += vectors[j][i];
            }
        }
        result.push(value);
        value = 0;
    }
    return result;
};

/**
 * Vector Subtraction
 * @param: vectors, an array of vectors, where each element is of equal length
 * */

LinAlg.prototype.vectSub = function (vectors) {
    var result = [],
        value = 0,
        vectLen = vectors[0].length,
        numVectors = vectors.length;
    for (let i = 0; i < vectLen; i++) {
        value = vectors[0][i];
        for (let j = 1; j < numVectors; j++) {
            if(vectors[j].length !== vectLen) {
                throw new Error('Vectors lengths do not match!');
            } else {
                value -= vectors[j][i];
            }
        }
        result.push(value);
        value = 0;
    }
    return result;
};

/**
 * Scalar Multiplication
 * @param: scalar: a number
 * @param: arrs: an array of arrays
 */

LinAlg.prototype.scalarMult = function (scalar, arrs) {
    var numVectors = arrs.length;
    for (let i = 0; i < numVectors; i++) {
        arrs[i] = arrs[i].map(function(el) {
            return el * scalar;
        })
    }
    return arrs;
};

module.exports = LinAlg;