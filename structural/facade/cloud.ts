export class CloudProviderService {
  public isLoggedIn(): boolean {
    return Math.random() > 0.5;
  }

  public logIn(): void {
    console.log("Logging in...");
  }

  public convertFile(file: string): string {
    console.log("Converting file...", file);

    return file + ".converted";
  }

  public uploadFile(file: string): void {
    console.log("Uploading file...", file);
  }

  public getFileLink(file: string): string {
    return `https://example.com/${file}`;
  }
}

export class CloudProviderFacade {
  private service: CloudProviderService;

  constructor() {
    this.service = new CloudProviderService();
  }

  public uploadFile(file: string): string {
    if (!this.service.isLoggedIn()) {
      this.service.logIn();
    }

    const convertedFile = this.service.convertFile(file);
    this.service.uploadFile(convertedFile);

    return this.service.getFileLink(convertedFile);
  }
}

const facade = new CloudProviderFacade();
const fileLink = facade.uploadFile("file.txt");
console.log("File link:", fileLink);