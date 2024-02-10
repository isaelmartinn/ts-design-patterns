export interface Laptop {
  playStartipSound(): void;
  getSpecs(): void;
}

export interface Processor {
  getInfo(): string;
}

export class Intel implements Processor {
  getInfo(): string {
    return "Intel";
  }
}

export class M1 implements Processor {
  getInfo(): string {
    return "M1";
  }
}

export class M1Max implements Processor {
  getInfo(): string {
    return "M1 Max";
  }
}

export class Lenovo implements Laptop {
  protected processor!: Processor;
  model = "Lenovo";

  constructor(processor: Processor) {
    this.processor = processor;
  }

  playStartipSound(): void {
    console.log("Lenovo Sound");
  }

  getSpecs(): void {
    console.log(`${this.model} has ${this.processor.getInfo()}`);
  }
}

export class MackbookPro implements Laptop {
  protected processor!: Processor;
  model = "MackbookPro";

  constructor(processor: Processor) {
    this.processor = processor;
  }

  playStartipSound(): void {
    console.log("Mackbook pro Sound");
  }

  getSpecs(): void {
    console.log(`${this.model} has ${this.processor.getInfo()}`);
  }
}

const intelCPU = new Intel();
const m1CPU = new M1();
const m1MaxCPU = new M1Max();

const lenovoIntel = new Lenovo(intelCPU);
const macIntel = new MackbookPro(intelCPU);
const macM1 = new MackbookPro(m1CPU);
const macM1Max = new MackbookPro(m1MaxCPU);

lenovoIntel.getSpecs();
macIntel.getSpecs();
macM1.getSpecs();
macM1Max.getSpecs();
