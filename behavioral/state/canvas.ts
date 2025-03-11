export interface Tool {
  onMouseUp(): void;
  onMouseDown(): void;
}

export class SelectionTool implements Tool {
  onMouseDown(): void {
    console.log("Selection started");
  }

  onMouseUp(): void {
    console.log("Selection drawn");
  }
}

export class BrushTool implements Tool {
  onMouseDown(): void {
    console.log("Brush stroke started");
  }

  onMouseUp(): void {
    console.log("Brush stroke drawn");
  }
}

export class EraserTool implements Tool {
  onMouseDown(): void {
    console.log("Eraser started");
  }

  onMouseUp(): void {
    console.log("Erased");
  }
}

export class Canvas {
  constructor(private tool: Tool) {}

  setTool(tool: Tool) {
    this.tool = tool;
  }

  onMouseDown() {
    this.tool.onMouseDown();
  }

  onMouseUp() {
    this.tool.onMouseUp();
  }
}

/// Client Code
const canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new EraserTool());
canvas.onMouseDown();
canvas.onMouseUp();
