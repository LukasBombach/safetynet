import Edge from "./edge";

export default class Vertex {
  public readonly incoming: Edge[] = [];
  public readonly outgoing: Edge[] = [];
}
