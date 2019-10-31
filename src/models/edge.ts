import Vertex from "./vertex";

export default class Edge {
  public readonly origin: Vertex;
  public readonly destination: Vertex;

  constructor(origin: Vertex, destination: Vertex) {
    this.origin = origin;
    this.destination = destination;
  }
}
