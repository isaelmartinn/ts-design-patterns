export interface Person {
  name: string;
  identifier(): void;
}

export class NaturalPerson implements Person {
  name: string;

  constructor() {
    this.name = "";
  }

  identifier() {
    return "Identifier of NaturalPerson";
  }
}

export class LegalPerson implements Person {
  name: string;

  constructor() {
    this.name = "";
  }

  identifier() {
    return "Identifier of LegalPerson";
  }
}

export class PersonFactory {
  public static createPerson(type: string): Person {
    if (type === "N") return new NaturalPerson();

    if (type === "L") return new LegalPerson();

    return null as unknown as Person;
  }
}

export class Main {
  static main() {
    const naturalPerson: Person = PersonFactory.createPerson("N");
    const legalPerson: Person = PersonFactory.createPerson("L");

    console.log(naturalPerson.identifier());
    console.log(legalPerson.identifier());
  }
}

Main.main();
