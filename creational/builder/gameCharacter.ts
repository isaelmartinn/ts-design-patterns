export class GameCharacter {
  name?: string;
  class?: string;
  weapon?: string;
  armor?: string;

  describe() {
    console.log(`
      Character: ${this.name}
      Class: ${this.class}
      Weapon: ${this.weapon}
      Armot: ${this.armor}
    `);
  }
}

export interface CharacterBuilder {
  setName(name: string): this;
  setClass(className: string): this;
  setWeapon(weapon: string): this;
  setArmor(armor: string): this;
  build(): GameCharacter;
}

class GameCharacterBuilder implements CharacterBuilder {
  private character!: GameCharacter;

  constructor() {
    this.character = new GameCharacter();
  }

  setName(name: string): this {
    this.character.name = name;
    return this;
  }

  setClass(className: string): this {
    this.character.class = className;
    return this;
  }

  setWeapon(weapon: string): this {
    this.character.weapon = weapon;
    return this;
  }

  setArmor(armor: string): this {
    this.character.armor = armor;
    return this;
  }

  build(): GameCharacter {
    return this.character;
  }
}

const character = new GameCharacterBuilder()
  .setName("Archer")
  .setClass("Elf")
  .setWeapon("Bow")
  .setArmor("Leather armor")
  .build();

character.describe();
