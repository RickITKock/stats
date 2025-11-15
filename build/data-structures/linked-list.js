"use strict";
class Vector {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    /**
     * Creates a new, empty linked list.
     */
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
    /**
     * Checks, if the list is empty.
     *
     * @returns Whether the list is empty or not.
     */
    isEmpty() {
        return !this.head;
    }
    /**
     * Gets the data of the node at the given index.
     * Time complexity: linear (O(n))
     *
     * @param index The index of the node.
     * @returns The data of the node at the given index or null, if no data is present.
     */
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (this.isEmpty()) {
            return null;
        }
        let currentVector = this.head;
        for (let i = 0; i < index; i++) {
            if (!currentVector.next) {
                return null;
            }
            currentVector = currentVector.next;
        }
        return currentVector.data;
    }
    /**
     * Inserts the given data as the first node of the list.
     * Time complexity: constant (O(1))
     *
     * @param data The data to be inserted.
     */
    push(data) {
        const vector = new Vector(data);
        if (this.isEmpty()) {
            this.head = vector;
            this.tail = vector;
        }
        else {
            vector.next = this.head;
            this.head = vector;
        }
        this.length++;
    }
    /**
     * Removes the first node of the list.
     * Time complexity: constant (O(1))
     *
     * @returns The data of the node that was removed.
     * @throws Index out of bounds if the list is empty.
     */
    pop() {
        if (this.isEmpty()) {
            throw new Error("Index out of bounds");
        }
        const vector = this.head;
        this.head = this.head.next;
        this.length--;
        return vector.data;
    }
    /**
     * Inserts the given data as a new node after the current TAIL.
     * Time complexity: constant (O(1))
     *
     * @param data The data of the node being inserted.
     */
    append(data) {
        const vector = new Vector(data);
        if (this.isEmpty()) {
            this.head = vector;
        }
        else {
            this.tail.next = vector;
        }
        this.tail = vector;
        this.length++;
    }
    /**
     * Removes the current TAIL of the list.
     * Time complexity: linear (O(n))
     *
     * @returns The data of the former TAIL.
     * @throws Index out of bounds if the list is empty.
     */
    removeTail() {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        const currentTail = this.tail;
        if (this.head === this.tail) {
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return currentTail.data;
        }
        let currentVector = this.head;
        while (currentVector.next !== currentTail) {
            currentVector = currentVector.next;
        }
        this.tail = currentVector;
        this.length--;
        return currentTail.data;
    }
    /**
     * Inserts the data as a new node at the given index.
     * Time complexity: O(n)
     *
     * @param index The index where the node is to be inserted.
     * @param data The data to insert.
     * @throws Index out of bounds, when given an invalid index.
     */
    insertAt(index, data) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        // Just push it if it would be the first
        if (index === 0) {
            this.push(data);
            return;
        }
        // Add a new vector at the end
        if (index === this.length) {
            this.append(data);
            return;
        }
        const newVector = new Vector(data);
        let currentVector = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentVector = currentVector === null || currentVector === void 0 ? void 0 : currentVector.next;
        }
        const nextVector = currentVector === null || currentVector === void 0 ? void 0 : currentVector.next;
        currentVector.next = newVector;
        newVector.next = nextVector;
        this.length++;
    }
    /**
     * Clears the list.
     */
    clear() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
}
// const list: LinkedList<number | string> = new LinkedList();
// list.push(1);
// list.push("yes");
// list.clear();
// console.log(list);
// const vector2: Vector<number> = new Vector(5);
// const vector3: Vector<number> = new Vector(2);
// vector3.data = 10;
// list.add(vector1);
// list.add(vector2);
// list.add(vector3);
// console.log(list.list);
