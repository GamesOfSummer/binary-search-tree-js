"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function binarySearch(array, numberToFind) {
    var numberFound = false;
    var halfWayPointArrayIndex = 0;
    while (numberFound === false) {
        halfWayPointArrayIndex = Math.floor(array.length / 2);
        var halfWayPoint = array[halfWayPointArrayIndex];
        if (array.length < 1) {
            numberFound = true;
        }
        else if (halfWayPoint !== numberToFind) {
            if (halfWayPoint < halfWayPointArrayIndex) {
                array = array.slice(0, halfWayPoint);
            }
            else {
                array = array.slice(halfWayPoint, array.length);
            }
        }
        else {
            numberFound = true;
        }
    }
    return halfWayPointArrayIndex;
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(binarySearch([1, 2, 3, 4, 5], 3), 2);
(0, helpers_1.validateFxn)(binarySearch([1, 2, 3, 4, 5], 5), 4);
(0, helpers_1.validateFxn)(binarySearch([1, 2, 3, 4, 5], 1), 0);
(0, helpers_1.validateFxn)(binarySearch([1, 2, 3, 4, 5, 6], 3), 2);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
