export interface IComponent {
  referenceToParent?: Folder;
  dir(indent: string): void;

  detach(): void;
}

export class File implements IComponent {
  referenceToParent?: Folder = undefined;

  constructor(public name: string) {}

  dir(indent: string): void {
    console.log(`${indent}<FILE> ${this.name}`);
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}

export class Folder implements IComponent {
  referenceToParent?: Folder;
  name: string;
  components!: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  dir(indent: unknown): void {
    console.log(`${indent}<DIR> ${this.name}`);

    this.components.forEach((component) => {
      component.dir(indent + "..");
    });
  }

  attach(component: IComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: IComponent): void {
    const index = this.components.indexOf(component);

    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

const fileSystem = new Folder("root");
const file1 = new File("abc.txt");
const file2 = new File("123.txt");

fileSystem.attach(file1);
fileSystem.attach(file2);

const folderA = new Folder("folder_a");
fileSystem.attach(folderA);

const file3 = new File("xyz.txt");
folderA.attach(file3);

const folderB = new Folder("folder_b");
const file4 = new File("456.txt");
folderB.attach(file4);
fileSystem.attach(folderB);

fileSystem.dir("");

console.log("");
folderB.attach(folderA);
fileSystem.dir("");
