export abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "Sample Data";
    const parsedData = this.parse(data);
    this.validateData(parsedData);
    this.useData(parsedData);
  }

  protected loadData() {
    console.log("Loading data...");
  }

  protected validateData(data: any) {
    console.log("Validating data...");
  }

  protected useData(data: any) {
    console.log("Using data");
  }

  protected abstract parse(data: any): any;
}

export class JSONParse extends DataParser {
  protected parse(data: any) {
    console.log("Parsing data as JSON...");

    return data;
  }
}

export class XMLParse extends DataParser {
  protected parse(data: any) {
    console.log("Parsing data as XML...");

    return data;
  }
}

/// Client Code
function dataParser(dataParser: DataParser) {
  dataParser.parseData();
}

console.log("Parsing JSON data");
dataParser(new JSONParse());

console.log("");

console.log("Parsing XML data");
dataParser(new XMLParse());
