export interface Weapon {
  usefulFunction(): string;
}

export class Sword implements Weapon {
  public usefulFunction(): string {
    return "The result of the Sword";
  }
}

export class Axe implements Weapon {
  public usefulFunction(): string {
    return "The result of the Axe";
  }
}

export class MageFireball implements Weapon {
  public usefulFunction(): string {
    return "The result of the MageFireball";
  }
}

export interface Armor {
  usefulFunction(): string;
  usefulFunctionWithWeapon(collaborator: Weapon): string;
}

export class BodyArmor implements Armor {
  public usefulFunction(): string {
    return "The result of the BodyArmor";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the BodyArmor collaborating with the (${result})`;
  }
}

export class OrcArmor implements Armor {
  public usefulFunction(): string {
    return "The result of the OrcArmor";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the OrcArmor collaborating with the (${result})`;
  }
}

export class Cloak implements Armor {
  public usefulFunction(): string {
    return "The result of the Cloak";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the Cloak collaborating with the (${result})`;
  }
}

export interface AbstractFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}

export class WarriorFactory implements AbstractFactory {
  public createArmor(): Armor {
    return new BodyArmor();
  }

  public createWeapon(): Weapon {
    return new Sword();
  }
}

export class OrcFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Axe();
  }

  public createArmor(): Armor {
    return new OrcArmor();
  }
}

export class MageFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new MageFireball();
  }

  public createArmor(): Armor {
    return new Cloak();
  }
}

export function clientCode(factory: AbstractFactory) {
  const weapon = factory.createWeapon();
  const armor = factory.createArmor();

  console.log(armor.usefulFunction());
  console.log(armor.usefulFunctionWithWeapon(weapon));
}

console.log("Client: WarriorFactory");
clientCode(new WarriorFactory());

console.log("----------------");

console.log("Client: OrcFactory");
clientCode(new OrcFactory());

console.log("----------------");

console.log("Client: MageFactory");
clientCode(new MageFactory());
