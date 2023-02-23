import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

class Node {
    data: number;
    left: Node;
    right: Node;

    constructor(value: number) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: Node;

    constructor() {
        this.root = null;
    }

    push(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else if (value > this.root.data) {
            this.root.left = node;
        } else {
            this.root.right = node;
        }
    }
}

consoleStart();

const nums = [3, 1, 5];
const tree = new BST();
nums.map((num) => tree.push(num));

const tree2 = tree;
// expect(objs.value).toEqual(3);

//validateFxn(BST([1, 2, 3, 4, 5], 3), 2);
//validateFxn(BST([1, 2, 3, 4, 5], 5), 4);

consoleEnd();
consoleBuffer();

export {};
