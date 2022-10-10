import Shape from './Shape';
import Point from './Point';

export default class Triangle extends Shape {
  constructor(v1: Point, v2: Point, v3: Point)
  constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean)

  constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
    if (color && filled) {
      super([v1, v2, v3], color, filled);
    } else
    super([v1, v2, v3]);
  }

  public toString(): string {
    return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`
  }

  public getType(): string {
    const a = this.points[0].distance(this.points[1]);
    const b = this.points[1].distance(this.points[2]);
    const c = this.points[2].distance(this.points[0]);

    if (a === b && b === c) {
      return 'equilateral triangle';
    }
    if (a !== b && a !== c && b !== c) {
      return 'scalene triangle';
    }
    else {
      return 'isosceles triangle';
    }
  }
}
