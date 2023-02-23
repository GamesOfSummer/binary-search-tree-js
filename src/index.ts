import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

// import { describe, expect, it } from '@jest/globals';

class Node {
    data: number;
    left: Node;
    right: Node;

    constructor(value: number = null, left: Node = null, right: Node = null) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    serialize() {
        // @ts-ignore
        const ans: Node = { data: this.data };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    }
}

export class BST {
    root: Node;

    constructor() {
        this.root = null;
    }

    push(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else if (value < this.root.data) {
            this.root.left = node;
        } else {
            this.root.right = node;
        }
    }

    toObject() {
        return this.root.serialize();
    }
}

consoleStart();

const nums = [3, 1, 5];
const tree = new BST();
nums.map((num) => tree.push(num));

const objs = tree.toObject();

const tree2 = tree;

validateFxn(objs.data, 3);
validateFxn(objs.left.data, 1);
validateFxn(objs.right.data, 5);

consoleEnd();
consoleBuffer();

export {};
