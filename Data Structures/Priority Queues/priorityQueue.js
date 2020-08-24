class PriorityQueue{
     constructor(values) {
          this.values = []
     }

     enqueue(val, priority){
          let newNode = new Node(val, priority)
          this.values.push(newNode)
          
          let index = this.values.length - 1
          while(index > 0){
               let parentIndex = Math.floor((index - 1) / 2);
               if(this.values[index].priority >= this.values[parentIndex].priority) break
               [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
               index = parentIndex
          }
     }

     dequeue(){
          let  min = this.values[0],
               end = this.values.pop();
          if(this.values.length){  
               this.values[0] = end
               this.sinkDown();
          }
          return min
     }

     sinkDown(){
          let  index = 0,
               length = this.values.length,
               element = this.values[0]
          
          while(true){
               let  leftIdx = 2 * index + 1,
                    rightIdx = 2 * index + 2,
                    swap = null,
                    left,right;

               if(leftIdx < length){
                    left = this.values[leftIdx]
                    if(left.priority < element.priority){
                         swap = left
                    }
               }
               if(rightIdx < length){
                    right = this.values[rightIdx]
                    if(
                         (swap === null && right.priority < element.priority) 
                         || 
                         (swap !== null && right.priority < left.priority))
                    {
                         swap = right
                    }
               }
               if(swap === null) break
               this.values[index] = this.values[swap]
               this.values[swap] = element
               index = swap
          }
     }
}

class Node{
     constructor(val, priority) {
          this.val = val,
          this.priority = priority
     }
}