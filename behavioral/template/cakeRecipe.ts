export abstract class CakeRecipe {
  public bakeCake() {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preHeatOven(): void {
    console.log("Preheating oven to 175° C");
  }

  protected bake(): void {
    console.log("Bakging cake...");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake...");
  }

  protected decorate(): void {
    console.log("Decorating cake...");
  }

  protected abstract mixIngredients(): void;
}

export class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, and eggs");
  }

  protected decorate(): void {
    console.log("Decorating cake with chocolate");
  }
}

export class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, and eggs");
  }
}

/// Client Code
function bakeCake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakeCake(new ChocolateCake());

console.log();

console.log("Baking a vanilla cake");
bakeCake(new VanillaCake());
