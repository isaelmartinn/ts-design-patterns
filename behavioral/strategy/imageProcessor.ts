export interface FilterStrategy {
  apply(image: string): void;
}

export class GrayscaleStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applaying grayscale to ${image}`);
  }
}

export class SepiaStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applaying sepia to ${image}`);
  }
}

export class NegativeStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applaying negative to ${image}`);
  }
}

export class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}

  setFilterStrategy(strategy: FilterStrategy) {
    this.strategy = strategy;
  }

  applyFilter(image: string) {
    this.strategy.apply(image);
  }
}

/// Client Code
const imageProcessor = new ImageProcessor(new GrayscaleStrategy());
imageProcessor.applyFilter("cat.png");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("mountain.png");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("snow.png");
