export class Edge {
  public from: string
  public to: string
  public weight: number

  constructor(vertex1: string, vertex2: string, weight: number) {
    this.from = vertex1
    this.to = vertex2
    this.weight = weight
  }
}
