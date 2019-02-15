'use strict';

const plain = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reduce((seq, current) => {
        return seq.concat(Array.isArray(current) ? plain(current) : current);
    }, []);
};
