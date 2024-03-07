export interface Command {
  execute(): void;
  undo(): void;
}

export class AddToCartCommand implements Command {
  constructor(private cart: Cart, private item: Item) {}

  execute() {
    this.cart.add(this.item);
  }

  undo() {
    this.cart.remove(this.item);
  }
}

export class RemoveFromCartCommand implements Command {
  constructor(private cart: Cart, private item: Item) {}

  execute() {
    this.cart.remove(this.item);
  }

  undo() {
    this.cart.add(this.item);
  }
}

export class ModifyCartItemCommand implements Command {
  private previousItemQuantity!: number;

  constructor(private cart: Cart, private item: Item, private newQuantity: number) {}

  execute() {
    this.previousItemQuantity = this.cart.modify(this.item, this.newQuantity);
  }

  undo() {
    this.cart.modify(this.item, this.previousItemQuantity);
  }
}

export class Item {
  constructor(public id: number, public name: string, public price: number, public quantity: number = 1) {}
}

export class Cart {
  private items: Item[] = [];

  add(item: Item): void {
    const index = this.items.findIndex((i) => i.id === item.id);

    if (index > -1) {
      this.items[index].quantity += 1;
    } else {
      this.items.push(item);
    }
  }

  remove(item: Item): void {
    const index = this.items.findIndex((i) => i.id === item.id);

    if (index > -1 && this.items[index].quantity > 1) {
      this.items[index].quantity -= 1;
    } else {
      this.items = this.items.filter((i) => i.id !== item.id);
    }
  }

  modify(item: Item, newQuantity: number): number {
    const previousQuantity = item.quantity;
    item.quantity = newQuantity;

    return previousQuantity;
  }

  getItems(): Item[] {
    return this.items;
  }
}

const cart = new Cart();
const book = new Item(1, "Book", 10);
const movie = new Item(2, "Movie", 20);

const addBookCommand = new AddToCartCommand(cart, book);
const removeBookCommand = new RemoveFromCartCommand(cart, book);
const modifyBookCommand = new ModifyCartItemCommand(cart, book, 2);
const addMovieCommand = new AddToCartCommand(cart, movie);

addBookCommand.execute();
console.log(cart.getItems());

addMovieCommand.execute();
console.log(cart.getItems());

removeBookCommand.execute();
console.log(cart.getItems());

addMovieCommand.undo();
console.log(cart.getItems());

removeBookCommand.undo();
console.log(cart.getItems());

modifyBookCommand.execute();
console.log(cart.getItems());

modifyBookCommand.undo();
console.log(cart.getItems());
