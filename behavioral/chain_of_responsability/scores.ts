import {Handler} from "./basic";

export interface BaseScore {
  organiser: string;
  participant: string;
  score: number;
}

export class Score implements BaseScore {
  constructor(public organiser: string, public participant: string, public score: number) {}
}

export interface HandlerScores {
  handler: HandlerScores;
  handle(scores: BaseScore[]): any;
  addHandler(handler: HandlerScores): void;
}

export class HandlerAbstractClass implements HandlerScores {
  handler!: HandlerScores;

  handle(scores: BaseScore[]) {
    if (typeof this.handler !== "undefined") {
      return this.handler.handle(scores);
    }

    return false;
  }

  addHandler(handler: HandlerScores) {
    this.handler = handler;
  }
}

class AboveScoreHandler extends HandlerAbstractClass implements HandlerScores {
  constructor(public minimumScore: number = 0) {
    super();
  }

  handle(scores: BaseScore[]) {
    if (scores[0].score < this.minimumScore) {
      return false;
    }

    if (typeof this.handler !== "undefined") {
      return this.handler.handle(scores);
    }

    return true;
  }
}

class MultiplesScoreHandler extends HandlerAbstractClass implements HandlerScores {
  constructor(public multiples: number = 1) {
    super();
  }

  handle(scores: BaseScore[]) {
    if (scores[0].score % this.multiples !== 0) {
      return false;
    }

    if (typeof this.handler !== "undefined") {
      return this.handler.handle(scores);
    }

    return true;
  }
}

const scores = [
  new Score("s1", "p1", 3),
  new Score("s1", "p2", 6),
  new Score("s1", "p3", 4),
  new Score("s2", "p1", 4),
  new Score("s2", "p2", 0),
  new Score("s2", "p3", 1),
];

const acceptedScores: BaseScore[] = [];

while (scores.length > 0) {
  const aboveScoreHandler = new AboveScoreHandler(4);
  const multipleScoreHandler = new MultiplesScoreHandler(3);

  aboveScoreHandler.addHandler(multipleScoreHandler);

  if (aboveScoreHandler.handle(scores)) {
    acceptedScores.push(scores[0]);
  }

  scores.splice(0, 1);
}

console.log(acceptedScores);