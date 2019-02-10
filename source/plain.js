'use strict';

const plain = function (arr) {
    let result = [];
    traverse(arr, result);
    return result;
};

function traverse(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (!Array.isArray(elem)) {
            result.push(elem)
        } else {
            traverse(elem, result);
        }
    }
}
