export interface Observer {
  update(steps: number, heartRate: number, sleep: number): void;
}

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class FitnessTracker implements Subject {
  private observers: Observer[] = [];
  private steps: number;
  private heartRate: number;
  private sleep: number;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.steps, this.heartRate, this.sleep);
    }
  }

  setActivityData(steps: number, heartRate: number, sleep: number): void {
    this.sleep = sleep;
    this.steps = steps;
    this.heartRate = heartRate;

    this.notifyObservers();
  }
}

export class SmartWatch implements Observer {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(
      `SmartWatch - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep}`
    );
  }
}

export class MobileApp implements Observer {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(
      `MobileApp - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep}`
    );
  }
}

const fitnessTracker = new FitnessTracker();
const smartWatch = new SmartWatch();
const mobileApp = new MobileApp();

fitnessTracker.registerObserver(smartWatch);
fitnessTracker.registerObserver(mobileApp);

fitnessTracker.setActivityData(10_000, 72, 8);
