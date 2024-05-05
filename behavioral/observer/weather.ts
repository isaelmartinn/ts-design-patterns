export interface Observer {
  update(temp: number): void;
}

export interface Subject {
  resgisterObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  resgisterObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    console.log("\nWeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
}

export class TemperatureDisplay implements Observer {
  update(temp: number): void {
    console.log("TemperatureDisplay: I need to update my display");
  }
}

export class Fan implements Observer {
  update(temp: number): void {
    if (temp > 25) {
      console.log("Fan: It’s hot here, turning myself on...");
    } else {
      console.log("Fan: It’s nice and cool, turning myself off...");
    }
  }
}

const weatherStation = new WeatherStation();

const temperatureDisplay = new TemperatureDisplay();
const fan = new Fan();

weatherStation.resgisterObserver(temperatureDisplay);
weatherStation.resgisterObserver(fan);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
