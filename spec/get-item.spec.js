const libraryChai = require('chai');
const expect = libraryChai.expect;
const getItem = require('../get-item')

describe('getItem()', function () {
    it('When given an index of 0, it returns the first item.', function () {
        const actual = getItem(['a', 'b', 'c'], 0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('When given an index less than the length of the array, it returns that index.', function () {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 3);
        const expected = 'd';
        expect(actual).to.equal(expected);
    });
    it('When given an index equal to the length of the array, it returns the first item.', function () {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 5);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('When given an index greater than the length of the array, it returns the first item.', function () {
        const actual = getItem(['a', 'b', 'c', 'd', 'e'], 6);
        const expected = 'b';
        expect(actual).to.equal(expected);
    });
});
