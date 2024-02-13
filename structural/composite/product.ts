export interface ProductComponent {
  getPrice(): number;
}

export class Product implements ProductComponent {
  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }
}

export class DiscountedProduct implements ProductComponent {
  constructor(private price: number, private discount: number) {}

  getPrice(): number {
    return this.price - this.discount;
  }
}

export class ProductContainer implements ProductComponent {
  private children: ProductComponent[] = [];

  add(component: ProductComponent) {
    this.children.push(component);
  }

  getPrice(): number {
    return this.children.reduce(
      (totalPrice, child) => totalPrice + child.getPrice(),
      0
    );
  }
}

const laptop = new Product(300);
const phone = new DiscountedProduct(200, 50);

const smallBox = new ProductContainer();
smallBox.add(laptop);
console.log("Total price of small box:", smallBox.getPrice());

const bigBox = new ProductContainer();
bigBox.add(laptop);
bigBox.add(phone);
console.log("Total price of big box:", bigBox.getPrice());
