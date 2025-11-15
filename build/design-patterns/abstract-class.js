"use strict";
class SomeClass {
    process() {
        this.loadData();
        this.transform();
        this.save();
    }
}
class Processor extends SomeClass {
    constructor() {
        super();
        this.data = null;
    }
    loadData() {
        this.data = {
            id: "1",
            5: "akdfaosjfd",
            description: "Some description",
        };
    }
    transform() {
        if (this.data) {
            this.data.description = "Some transformed description";
        }
    }
    save() {
        console.log(this.data);
    }
}
const processor = new Processor();
processor.process();
