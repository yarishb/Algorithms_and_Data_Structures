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
     dfsRecursive(vertex){
          let result = [];
          let visited = {};
          const adjacencyList = this.adjacencyList

          function dfs(vertex){
               if(!vertex) return null;
               visited[vertex] = true;
               result.push(vertex);

               adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                       return dfs(neighbor)
                    }
               });
          }
          dfs(vertex)
          return result
     }
     dfsIterative(vertex){
          let  stack = [vertex],
               result = [],
               visited = {},
               temp;
          visited[vertex] = true

          while (stack.length){
               temp = stack.pop();
               result.push(temp)
               this.adjacencyList[temp].forEach(neighbor =>{
                    if(!visited[neighbor]){
                         visited[neighbor] = true
                         stack.push(neighbor)
                    }
               })
          }

         return result
     }
     breadthFirstSearch(vertex){
          let  queue = [vertex],
               result = [],
               visited = {},
               temp;

          visited[vertex] = true
          
          while(queue.length){
               temp = queue.shift()
               result.push(temp)
               this.adjacencyList[temp].forEach(neighbor => {
                    if(!visited[neighbor]){
                         visited[neighbor] = true;
                         queue.push(neighbor)
                    }
               })
               
          }
          

          return result
     }
}

let g = new Graph()
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

