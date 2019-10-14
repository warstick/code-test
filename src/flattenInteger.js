'use strict';

const errorMsg = 'non interger provided in the input. please check it once and changed it to interger.';

function FlattenIntegerArray() {}

/**
 * In this function we are using Es6 features like, Spread operator(...) for concatination.
 * Arrow function for defining the functions.
 * using let and const key words for the defining the variables.
 * @param {Array} integerArray
 * 
 * 
 */
FlattenIntegerArray.prototype.flattenArrayWithEs6 = integerArray => {
    let flattenArray = [];

    /**
     * it recieves integer or array of integers. and returns flattern array
     * @param {Array | integer} list 
     */
    const recursiveFunction = list => {
        if (Array.isArray(list)) {
            let flattenSubArray = [];
            for (let k = 0; k < list.length; k++) {
                flattenSubArray = [...flattenSubArray, ...recursiveFunction(list[k])];
            }

            return flattenSubArray;
        }

        if (isNaN(parseInt(list))) {
            throw new Error(errorMsg);
        }

        return [parseInt(list)];
    }

    /**
     * Loop through each element in the integer array.
     */
    for (let i = 0; i < integerArray.length; i++) {
        flattenArray = [...flattenArray, ...recursiveFunction(integerArray[i])];
    }

    return flattenArray;
};

/**
 * In this function we are not using the es6 concepts. using vanila javascript concepts.
 */
FlattenIntegerArray.prototype.flattenArrayWithOutEs6 = function (integerArray) {
    var flattenArray = [];
    /**
     * it recieves integer or array of integers. and returns flattern array
     * @param {Array | integer} list 
     */
    var recursiveFunction = (list) => {
        if (Array.isArray(list)) {
            let flattenSubArray = [];
            for (var k = 0; k < list.length; k++) {
                flattenSubArray = flattenSubArray.concat(recursiveFunction(list[k]));
            }

            return flattenSubArray;
        }

        if (isNaN(parseInt(list))) {
            throw new Error(errorMsg);
        }

        return [parseInt(list)];
    }

    /**
     * Loop through each element in the integer array.
     */
    for (var i = 0; i < integerArray.length; i++) {
        flattenArray = flattenArray.concat(recursiveFunction(integerArray[i]));
    }

    return flattenArray;
};
