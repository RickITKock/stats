abstract class SomeClass {
  process() {
    this.loadData();
    this.transform();
    this.save();
  }

  abstract loadData(): void;
  abstract transform(): void;
  abstract save(): void;
}

class Processor extends SomeClass {
  private data: { readonly id: string; [key: string]: unknown } | null;

  constructor() {
    super();
    this.data = null;
  }

  loadData(): void {
    this.data = {
      id: "1",
      5: "akdfaosjfd",
      description: "Some description",
    };
  }

  transform(): void {
    if (this.data) {
      this.data.description = "Some transformed description";
    }
  }

  save(): void {
    console.log(this.data);
  }
}

const processor = new Processor();
processor.process();
