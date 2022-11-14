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
    if (arg1 && typeof arg1 !== 'number' && !arg2) {
      const distanceX = Math.abs((arg1 as Point).x - this.x);
      const distanceY = Math.abs((arg1 as Point).y - this.y);

      return getDistance(distanceX, distanceY);
    }
    
    const distanceX = typeof arg1 === 'number' && typeof arg2 === 'number' ?
      Math.abs(arg1 as number - this.x) :
      Math.abs(0 - this.x); 
    const distanceY = typeof arg1 === 'number' && typeof arg2 === 'number' ?
      Math.abs(arg2 - this.y) :
      Math.abs(0 - this.y);

    return getDistance(distanceX, distanceY);
  } 
}

const getDistance = (distanceX: number, distanceY: number) => {
  if (distanceX && distanceY) {
    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  }
  if (!distanceX && distanceY) {
    return distanceY;
  }
  if (distanceX && !distanceY) {
    return distanceX;
  }
  if (!distanceX && !distanceY) {
    return 0;
  }
}
