import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function binarySearch(array: number[], numberToFind: number) {
    let numberFound = false;

    let halfWayPointArrayIndex = 0;

    while (numberFound === false) {
        halfWayPointArrayIndex = Math.floor(array.length / 2);
        let halfWayPoint = array[halfWayPointArrayIndex];

        if (array.length < 1) {
            numberFound = true;
        } else if (halfWayPoint !== numberToFind) {
            if (halfWayPoint < halfWayPointArrayIndex) {
                array = array.slice(0, halfWayPoint);
            } else {
                array = array.slice(halfWayPoint, array.length);
            }
        } else {
            numberFound = true;
        }
    }

    return halfWayPointArrayIndex;
}

consoleStart();

validateFxn(binarySearch([1, 2, 3, 4, 5], 3), 2);
validateFxn(binarySearch([1, 2, 3, 4, 5], 5), 4);
validateFxn(binarySearch([1, 2, 3, 4, 5], 1), 0);
validateFxn(binarySearch([1, 2, 3, 4, 5, 6], 3), 2);

consoleEnd();
consoleBuffer();

export {};
