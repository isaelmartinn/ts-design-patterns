export interface Rule {
  name: string;
  execute(): void;
}

export class RuleEngine {
  private rules: Record<string, Rule> = {};

  public getRules() {
    return this.rules;
  }

  public addRule(rule: Rule) {
    if (!this.ruleExistsWithName(rule.name)) {
      this.rules[rule.name] = rule;
    }
  }

  private ruleExistsWithName(name: string) {
    return this.rules[name] !== undefined;
  }

  public createIterator() {
    return new RuleEngineIterator(Object.values(this.rules));
  }
}

const ruleEngine = new RuleEngine();

ruleEngine.addRule({
  name: "First Rule",
  execute: () => {
    console.log("First Rule");
  },
});

ruleEngine.addRule({
  name: "Second Rule",
  execute: () => {
    console.log("Second Rule");
  },
});

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class RuleEngineIterator implements Iterator<Rule> {
  private index: number;
  private rules: Rule[];

  constructor(rules: Rule[]) {
    this.index = 0;
    this.rules = rules;
  }

  next() {
    const rule = this.rules[this.index];
    this.index++;

    return rule;
  }

  hasNext(): boolean {
    return this.index < this.rules.length;
  }
}

const iterator = ruleEngine.createIterator();
while (iterator.hasNext()) {
  const rule = iterator.next();
  rule.execute();
}
