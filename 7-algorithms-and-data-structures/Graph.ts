export interface WeightedGraph<T> {
  addVertex(key: string): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class Graph implements WeightedGraph<string> {
  public vertices: string[]
  public adjacencyList: Record<string, Record<string, number> | {}>
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }
  addVertex(vertex: string) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = {};
  }
  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1][vertex2] = weight;
  }
}
