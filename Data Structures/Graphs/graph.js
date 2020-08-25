class Graph{
     constructor(){
          this.adjacencyList = {}
     }

     addVertex(name){
          if(!this.adjacencyList)this.adjacencyList[name] = [] 
          return this.adjacencyList
     }
     addEdge(vertex1, vertex2){
          this.adjacencyList[vertex1].push(vertex2)
          this.adjacencyList[vertex2].push(vertex1)
          return this.adjacencyList
     }
}