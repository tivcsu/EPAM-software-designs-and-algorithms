export default class Point {
  private x: number;
  private y: number;
  constructor();
  constructor(x: number, y: number);

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  };

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(arg1?: Point | number, arg2?: number): number {
    if (arg1 && !arg2) {
      const distanceX = (arg1 as Point).x - this.x;
      const distanceY = (arg1 as Point).y - this.y;
      return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
    else if (arg1 && arg2) {
      const distanceX = arg1 as number - this.x;
      const distanceY = arg2 - this.y;
      return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
    return Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2));
  }

  
}
