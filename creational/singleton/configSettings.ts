export type Settings = {
  apiEndpoint: string;
  apiKey: string;
};

export class Configuration {
  private static instance: Configuration;
  private settings: Settings;

  private constructor() {
    this.settings = {
      apiEndpoint: "https://api.example.com",
      apiKey: "123456789",
    };
  }

  public static getInstance(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }

    return Configuration.instance;
  }

  public getSetting(key: keyof Settings): string {
    return this.settings[key];
  }
}

const config1 = Configuration.getInstance();
console.log(config1.getSetting("apiEndpoint"));

const config2 = Configuration.getInstance();
console.log(config2.getSetting("apiKey"));

console.log(config1 === config2);
