export interface FileSystemComponent {
  getName(): string;
  getSize(): number;
  dir(indent: string): void;
}

export interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}

export class File implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  dir(indent: string): void {
    console.log(`${indent} ${this.name}`);
  }
}

export class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.components.reduce((acc, current) => acc + current.getSize(), 0);
  }

  addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);

    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  getComponents(): FileSystemComponent[] {
    return this.components;
  }

  dir(indent: string = ""): void {
    console.log(`${indent} ${this.name}`);

    this.components.forEach((component, index) => {
      const prefixTab =
        index === this.components.length - 1
          ? component instanceof Folder
            ? "─"
            : "└"
          : component instanceof Folder
          ? "│"
          : "├";
      const tab = component instanceof Folder ? " " : "─";
      component.dir(indent + prefixTab + tab);
    });
  }
}

/// Client Code

const file1 = new File("exam.doc", 12);
const file2 = new File("Project.pdf", 120);
const file3 = new File("calc.xlsx", 300);

const folder = new Folder("Docs");

const folder2 = new Folder("School Projects");
const file4 = new File("mathExam.doc", 50);
const file5 = new File("mathProject.doc", 150);

const folder3 = new Folder("Language Projects");
const file6 = new File("spanishExam.doc", 40);
const file7 = new File("spanishProject.doc", 180);

folder2.addComponent(file4);
folder2.addComponent(file5);

folder3.addComponent(file6);
folder3.addComponent(file7);

folder2.addComponent(folder3);

folder.addComponent(file1);
folder.addComponent(file3);
folder.addComponent(folder2);
folder.addComponent(file2);

const showFolerStructure = (folder: Folder, space: number = 1) => {
  const prefixChar = "├";
  const char = "───";
  const folderSpace = space - 1;
  const folderTab = char.repeat(folderSpace);
  const fileTab = char.repeat(space);
  const folderPrefixChar = folderSpace > 0 ? prefixChar : "";
  const filePrefixChar =
    folderSpace > 0 ? "│" + "  ".repeat(space) + prefixChar : prefixChar;

  console.log(
    `${folderPrefixChar}${folderTab}${
      folderSpace > 0 ? " " : ""
    }${folder.getName()} - ${folder.getSize()} bytes`
  );

  for (const component of folder.getComponents()) {
    if (component instanceof File) {
      console.log(
        `${filePrefixChar}${fileTab} ${component.getName()} - ${component.getSize()} bytes`
      );
    }

    if (component instanceof Folder) {
      showFolerStructure(component, space + 1);
    }
  }
};

// showFolerStructure(folder);
folder.dir();
