interface IButton {
  render(): void;

  onClick(f: Function): void;
}

interface ICheckbox {
  render(): void;

  toggle(): void;
}

interface IGUIFactory {
  createButton(): IButton;

  createCheckbox(button: IButton): ICheckbox;
}

export class WindowsButton implements IButton {
  render() {
    console.log("Render a Windows button");
  }

  onClick(f: Function) {
    console.log("Windows button was clicked");
    f();
  }
}

export class WindowsCheckbox implements ICheckbox {
  constructor(private button: IButton) {
  }

  render() {
    console.log("Render a Windows Checkbox");
  }

  toggle() {
    this.button.onClick(() => console.log("Toggle a Windows Checkbox"));
  }
}

export class MacOSButton implements IButton {
  render() {
    console.log("Render a MacOS button");
  }

  onClick(f: Function) {
    console.log("MacOS button was clicked");
    f();
  }
}

export class MacOSCheckbox implements ICheckbox {
  constructor(private button: IButton) {
  }

  render() {
    console.log("Render a MacOS Checkbox");
  }

  toggle() {
    this.button.onClick(() => console.log("Toggle a MacOS Checkbox"));
  }
}

export class WindowsFactory implements IGUIFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new WindowsCheckbox(button);
  }
}

export class MacOSFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacOSButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new MacOSCheckbox(button);
  }
}

function renderUI(factory: IGUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("Button clicked"));
  checkbox.toggle();
}

renderUI(new WindowsFactory());
console.log();
renderUI(new MacOSFactory());
