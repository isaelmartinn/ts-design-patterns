export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  registerObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);

    if (isExist) return console.log("Observer already exists");

    this.observers.push(observer);
    console.log("Observer added Successfully");
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index === -1) return console.log("Observer does not exist");

    this.observers.splice(index, 1);
    console.log("Observer was successfully removed");
  }

  notifyObservers(): void {
    if (
      this.temperature === undefined ||
      this.humidity === undefined ||
      this.pressure === undefined
    ) {
      return;
    }

    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.humidity = humidity;
    this.pressure = pressure;
    this.temperature = temperature;
    this.notifyObservers();
  }
}

export class CurrentConditionsDisplay implements Observer {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor(private weatherData: Subject) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.pressure = pressure;
    this.temperature = temperature;
    this.display();
  }

  display() {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      console.log({
        temperature: this.temperature,
        humidity: this.humidity,
        pressure: this.pressure,
      });
    } else {
      console.log("Weater data is not available");
    }
  }
}

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(12, 12, 22);
