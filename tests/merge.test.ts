import { merge } from "../src/merge";

describe('test merge', () => {

    test('2 empty length array', () => {
      expect(merge([],[])).toEqual([]);
    });

    test('1 empty length array', () => {
      expect(merge([1,2,3],[])).toEqual([1,2,3]);
    });

    test('equal length array', () => {
      expect(merge([1,5,8],[2,3,10])).toEqual([1,2,3,5,8,10]);
    });

    test('unequal length array', () => {
      expect(merge([1,6],[2,4,5,20])).toEqual([1,2,4,5,6,20]);
    });

});