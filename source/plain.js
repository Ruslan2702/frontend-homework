'use strict';

const plain = function (arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let result = [];
    arr.forEach(function (element) {
        result = result.concat(Array.isArray(element) ? plain(element) : element);
    });

    return result;
};
