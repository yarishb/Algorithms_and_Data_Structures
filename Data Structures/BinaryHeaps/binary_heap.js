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
}

let heap = new MaxBinaryHeap()
heap.insert(55)