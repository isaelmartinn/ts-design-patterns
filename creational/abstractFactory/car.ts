enum Car {
  HONDA,
  MAZDA,
}

export abstract class CarPart {
  static getFactory(key: Car) {
    const hondaFactory = new HondaFactory();
    const mazdaFactory = new MazdaFactory();

    switch (key) {
      case Car.HONDA:
        return hondaFactory;
        break;
      case Car.MAZDA:
        return mazdaFactory;
        break;
      default:
        return mazdaFactory;
        break;
    }
  }

  abstract getLeftDoor(): object;
  abstract getRightDoor(): object;
}

export class HondaFactory extends CarPart {
  getLeftDoor() {
    return new HondaLeftDoor();
  }

  getRightDoor() {
    return new HondaRightDoor();
  }
}

export class MazdaFactory extends CarPart {
  getLeftDoor() {
    return new MazdaLeftDoor();
  }

  getRightDoor() {
    return new MazdaRightDoor();
  }
}

export class HondaLeftDoor {
  makePart() {
    return "I am Honda Left Door";
  }
}

export class HondaRightDoor {
  makePart() {
    return "I am Honda Rigth Door";
  }
}

export class MazdaLeftDoor {
  makePart() {
    return "I am Mazda Left Door";
  }
}

export class MazdaRightDoor {
  makePart() {
    return "I am Mazda Rigth Door";
  }
}

let factory = CarPart.getFactory(Car.HONDA);
let rightDoor = factory.getRightDoor();
console.log(rightDoor.makePart());

factory = CarPart.getFactory(Car.MAZDA);
rightDoor = factory.getLeftDoor();
let leftDoor = factory.getLeftDoor();

console.log(rightDoor.makePart());
console.log(leftDoor.makePart());
