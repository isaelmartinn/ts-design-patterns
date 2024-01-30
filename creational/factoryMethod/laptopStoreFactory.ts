export interface IStorage {
  getStorageType(): string;
}

export interface Processor {
  attachStorage(storage: IStorage): string;
  showSpecs(): string;
}

export class MacbookProcessor implements Processor {
  storage: string | undefined;

  MackbookProcessor() {
    console.log("Macbook is built using apple silicon chips");
  }

  attachStorage(storageAttached: IStorage) {
    this.storage = storageAttached.getStorageType();
    console.log("storageAttached", this.storage);

    return this.storage + " Attached to Mackbook";
  }

  showSpecs(): string {
    return this.toString();
  }

  toString(): string {
    return "AppleProcessor is created using Apple Silicaon and " + this.storage;
  }
}

export class MacbookStorage implements IStorage {
  storageSize: number;

  constructor(storageSize: number) {
    this.storageSize = storageSize;
    console.log(this.storageSize + " GB SSD");
  }

  getStorageType() {
    return this.storageSize + "GB SSD";
  }
}

export interface LaptopFactory {
  createProcessor(): Processor;
  createStorage(): IStorage;
}

export class Macbook implements LaptopFactory {
  storageSize: number;

  constructor(storage: number) {
    this.storageSize = storage;
  }

  createProcessor(): Processor {
    return new MacbookProcessor();
  }

  createStorage(): IStorage {
    return new MacbookStorage(this.storageSize);
  }
}

const buildLaptop = (laptopFactory: LaptopFactory): Processor => {
  const processor = laptopFactory.createProcessor();
  const storage = laptopFactory.createStorage();

  processor.attachStorage(storage);

  return processor;
};

const mackbook = buildLaptop(new Macbook(56));
