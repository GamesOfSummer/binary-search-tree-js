"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var Node = /** @class */ (function () {
    function Node(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.push = function (value) {
        var node = new Node(value);
        if (!this.root) {
            this.root = node;
        }
        else if (value > this.root.data) {
            this.root.left = node;
        }
        this.root.right = node;
    };
    return BST;
}());
(0, helpers_1.consoleStart)();
var nums = [3, 1, 5];
var tree = new BST();
nums.map(function (num) { return tree.push(num); });
var tree2 = tree;
// expect(objs.value).toEqual(3);
//validateFxn(BST([1, 2, 3, 4, 5], 3), 2);
//validateFxn(BST([1, 2, 3, 4, 5], 5), 4);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
