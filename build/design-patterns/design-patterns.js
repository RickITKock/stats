"use strict";
const visitor = {
    visit: function (c) {
        console.log("Logging the client's id:\t", c.id);
    },
};
const client = {
    id: "1",
    accept: function (v) {
        v.visit(this);
    },
};
client.accept(visitor);
console.log(client.id);
