type Visitor = {
  visit: (c: Client) => void;
};

type Client = {
  readonly id: string;
  accept: (v: Visitor) => void;
};

const visitor: Visitor = {
  visit: function (c: Client) {
    console.log("Logging the client's id:\t", c.id);
  },
};

const client: Client = {
  id: "1",
  accept: function (v: Visitor) {
    v.visit(this);
  },
};

client.accept(visitor);
console.log(client.id);