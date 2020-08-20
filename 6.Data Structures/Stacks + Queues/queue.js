class Node{
     constructor(val){
          this.val = val;
          this.next = null;
     }
}

class Queue{
     constructor(){
          this.first = null;
          this.last = null;
          this.size = 0;
     }

     enqueue(val){
          let newNode = new Node(val);
          if(!this.first) this.first = this.last = newNode;
          else {
               this.last.next = newNode;
               this.last = newNode;
          }
          return ++this.size;
     }
     dequeue(){
          if(!this.first) return null;
          let temp = this.first
          if(this.first === this.last) this.last = null
          else {
               this.first = this.first.next
               this.size--
          }
          return temp.val
     }
}