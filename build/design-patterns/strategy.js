"use strict";
// interface Shape {
//   draw(): void
// }
// class Rectangle implements Shape {
//   public draw() : void {
//     console.log("Drawing rectangle");
//   }
// }
// class Circle implements Shape {
//   public draw() : void {
//     console.log("Drawing circle");
//   }
// }
// interface Strategy {
//   doOperation() : void
// }
// class OperationAdd implements Strategy {
//   doOperation(): void {
//     console.log("Operation add");
//   }
// }
// class OperationSubtract implements Strategy {
//   doOperation(): void {
//     console.log("Operation subtract");
//   }
// }
// class Context {
//   constructor(private strategy: Strategy) {}
//   execute() {
//     return this.strategy.doOperation()
//   }
// }
// const add = new OperationAdd()
// const subtract = new OperationSubtract()
// let context = new Context(add)
// context.execute()
// context = new Context(subtract)
// context.execute()
