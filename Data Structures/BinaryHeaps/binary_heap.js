class MaxBinaryHeap{
     constructor(){
          this.values = [41,39,33,18,27,12]
     }

     insert(value){
          this.values.push(value)

          let index = this.values.length - 1
          while(index > 0){
               let parentIndex = Math.floor((index - 1) / 2);
               if(this.values[index] <= this.values[parentIndex]) break
               [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
               index = parentIndex
          }
     }
     remove(){
          let  max = this.values[0],
               end = this.values.pop()
          
          if(this.values.length > 0){
               this.values[0] = end
               this.sinkDown()
          }
          return max
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
                    if(left > element){
                         swap = leftIdx
                    }
               }
               if(rightIdx < length){
                    right = this.values[rightIdx]
                    if(
                         (swap === null && right > element) ||
                         (swap !== null && right > left)
                    ){
                         swap = rightIdx
                    }
               }

               if(swap === null) break
               this.values[index] = this.values[swap]
               this.values[swap] = element
               index = swap
          }
     }
}

let heap = new MaxBinaryHeap()
heap.insert(55)