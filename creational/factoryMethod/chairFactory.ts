export type Dimensions = {
  height: number;
  width: number;
  depth: number;
};

export interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Dimensions;
}

export class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): Dimensions {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}

export class SmallChair extends Chair {
  constructor() {
    super();
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }
}

export class MediumChair extends Chair {
  constructor() {
    super();
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}

export class BigChair extends Chair {
  constructor() {
    super();
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }
}

export class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair === "BigChair") return new BigChair();

    if (chair === "MediumChair") return new MediumChair();

    return new SmallChair();
  }
}

const CHAIR = ChairFactory.getChair("BigChair");
console.log(CHAIR.getDimensions());
