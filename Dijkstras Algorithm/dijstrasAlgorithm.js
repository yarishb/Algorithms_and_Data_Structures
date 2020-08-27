class WeightedGraph{
     constructor(){
          this.adjacencyList = {}
     }
     addVertex(vertex){
          if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
     }
     addEdge(vertex1, vertex2, weight){
          this.adjacencyList[vertex1].push([{node: vertex2, weight}])
          this.adjacencyList[vertex2].push([{node: vertex1, weight}])
     }
     Dijkstras(startVertex, endVertex){
          let  queue = new PriorityQueue(),
               distances = {},
               previous = {},
               smallest,
               path = [];

          //building initial state
          for(let i in this.adjacencyList){
               if(i === startVertex) {
                    distances[i] = 0;
                    queue.enqueue(i, 0);
               }
               else {
                    distances[i] = Infinity;
                    queue.enqueue(i, Infinity);
               }
               previous[i] = null
          }
          //as long as there is something to visit
          while(queue.values.length){
               smallest = queue.dequeue().val
               
               if(smallest === endVertex){
                    while(previous[smallest]){
                         path.push(smallest)
                         smallest = previous[smallest]
                    }
                    break;
               };
               if(smallest || distances[smallest] !== Infinity){
                    for(let neighbor in this.adjacencyList[smallest]){
                         let nodes = this.adjacencyList[smallest][neighbor]
                         for(let i = 0; i < nodes.length; i++){
                              var nextNode = nodes[i]
                         }
                         let candidate = distances[smallest] + nextNode.weight;
                         let nextNeighbor = nextNode.node
                         if(candidate < distances[nextNeighbor]){
                              distances[nextNeighbor] = candidate
                              previous[nextNeighbor] = smallest
                              queue.enqueue(nextNeighbor, candidate)
                         }         
                    }
               }
          }
          return path.concat(smallest).reverse()
     }    
}

class PriorityQueue{
     constructor(){
          this.values = [];
     }
     enqueue(val, priority){
          this.values.push({val, priority});
          this.sort()
     }
     dequeue(){
          return this.values.shift()
     }
     sort(){
          this.values.sort((a,b) => a.priority - b.priority)
     }
}


var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstras("A", "E");