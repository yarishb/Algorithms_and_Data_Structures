class Graph{
     constructor(){
          this.adjacencyList = {}
     }

     addVertex(name){
          if(!this.adjacencyList[name])this.adjacencyList[name] = [] 
          return this.adjacencyList
     }
     addEdge(vertex1, vertex2){
          this.adjacencyList[vertex1].push(vertex2)
          this.adjacencyList[vertex2].push(vertex1)
          return this.adjacencyList
     }
     removeEdge(vertex1, vertex2){
          this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
               v => v !== vertex2
          )
          this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
               v1 => v1 !== vertex1 
          )
          return this.adjacencyList
     }
     removeVertex(name){
          while(this.adjacencyList[name].length){
               let adjacentVertex = this.adjacencyList[name].pop()
               this.removeEdge(name, adjacentVertex)
          }
          delete this.adjacencyList[name]
     }
}

let g = new Graph()
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
