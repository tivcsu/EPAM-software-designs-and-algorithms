import Point from './Point';

export default abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: arrayWithMinThreePoints);
  constructor(points: arrayWithMinThreePoints, color: string, filled: boolean);

  constructor(points: arrayWithMinThreePoints, color?: string, filled?:boolean) {
    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  public toString(): string {
    const points = this.points.map(point => point.toString());
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'Not filled'}. 
    Points: ${points.join(', ')}`;
  }

  public getPerimeter(): number {
    return this.points.reduce((perimeter, point, index, points) => {
      if (index === points.length - 1 ) {
        return perimeter + point.distance(points[0]);
      }
      return perimeter + point.distance(points[index + 1]);
    }, 0)
  }
}

type arrayWithMinThreePoints = [Point, Point, Point, ...Point[]];
