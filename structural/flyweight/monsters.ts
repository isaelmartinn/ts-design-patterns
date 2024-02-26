export type MonsterType = "Goblin" | "Dragon";

export interface Monster {
  render(x: number, y: number): void;
}

export class Goblin implements Monster {
  private readonly type: MonsterType;
  private readonly texture: string;
  private readonly color: string;

  constructor() {
    this.type = "Goblin";
    this.texture = "goblin_texture.jpg";
    this.color = "green";
  }

  render(x: number, y: number) {
    console.log(`Rendering a ${this.color} ${this.texture} ${this.type} at (${x}, ${y})`);
  }
}

export class Dragon implements Monster {
  private readonly type: MonsterType;
  private readonly texture: string;
  private readonly color: string;

  constructor() {
    this.type = "Dragon";
    this.texture = "dragon_texture.jpg";
    this.color = "red";
  }

  render(x: number, y: number) {
    console.log(`Rendering a ${this.color} ${this.texture} ${this.type} at (${x}, ${y})`);
  }
}

export class FlyweightMonsterFactory {
  private cache: { [key in MonsterType]?: Monster } = {};

  getMonster(type: MonsterType): Monster {
    let monster = this.cache[type];

    if (!monster) {
      monster = type === "Goblin" ? new Goblin() : new Dragon();
      this.cache[type] = monster;
    }

    return monster;
  }
}

const monsterFactory = new FlyweightMonsterFactory();
const monsters: Monster[] = [];

for (let i = 0; i < 10_000; i++) {
  const type: MonsterType = i % 2 === 0 ? "Goblin" : "Dragon";
  const monster = monsterFactory.getMonster(type);

  monsters.push(monster);
  monster.render(i, Math.random() * 10_000);
}
