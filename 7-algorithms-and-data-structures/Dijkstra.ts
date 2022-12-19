import { Graph } from './Graph';

export interface GraphNode {
  name: string
  weight: number
  children?: {}
}
interface Path {
  path: string[]
  distance: number
}

export interface IDijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}

export class Dijkstra implements IDijkstra<string> {
  private graph: Graph
  constructor(graph: Graph) {
    this.graph = graph
  }

  public findShortestPath(source: string, end: string): Path {
    const paths = {} as Record<string, {distance: number, pathToVertex: string[]}>
    let calculated = []

    const initPaths = () => {
      this.graph.vertices.forEach(vertex => {
        paths[vertex] = {
          distance: vertex === source ? 0 : Infinity,
          pathToVertex: []
        }
      })
    }
    initPaths()

    let currVertex = source
    let minDistance = Infinity
    let nextVertex: string
    let bestPath = {
      distance: source === end ? 0 : Infinity,
      pathToVertex: []
    } as {distance: number, pathToVertex: string[]}
    while (nextVertex !== null) {
      const neighbors = Object.entries(this.graph.adjacencyList[currVertex])
      nextVertex = null
      neighbors.forEach(([neighbor, distance]) => {
        const prevVertices = paths[neighbor].pathToVertex
        const prevDistance = paths[neighbor].distance
        paths[neighbor] = {
          distance: prevDistance > (distance + paths[currVertex].distance)  ? (distance + paths[currVertex].distance) : prevDistance,
          pathToVertex: [...prevVertices, currVertex]
        }
        if (neighbor === end && bestPath.distance > paths[neighbor].distance) {
          bestPath = {
            distance: paths[neighbor].distance,
            pathToVertex: [...paths[neighbor].pathToVertex, end]
          }
        }
        if (distance < minDistance && !calculated.includes(neighbor)) {
          minDistance = distance
          nextVertex = neighbor
        }
      })
      calculated = [...calculated, currVertex]
      
      currVertex = nextVertex
    }
    
    console.log({
      path: bestPath.pathToVertex,
      distance: bestPath.distance
    });
    
    return {
      path: bestPath.pathToVertex,
      distance: bestPath.distance
    }
  }

  public findAllShortestPaths(source: string) {
    const paths = {} as Record<string, {distance: number, path: string[]}>

    this.graph.vertices.forEach(vertex => {
      const path = this.findShortestPath(source, vertex)
      paths[vertex] = {
        distance: path.distance,
        path: path.path
      }
    })
    console.log(paths);
    
    return paths
  }
}
