class Node{
     constructor(val){
          this.val = val;
          this.next = null
     }
}

class DoublyLinkedList{
     constructor(){
          this.head = null;
          this.tail = null;
          this.length = 0;
     }
     push(val){
          let newNode = new Node(val)

          if(this.head === null){
               this.head = newNode
               this.tail = newNode
          }else{
               this.tail.next = newNode
               newNode.prev = this.tail
               this.tail = newNode
          }
          this.length++;
          return this
     }
     pop(){
          if(!this.head) return undefined

          let temp = this.tail;
          
          if(this.length === 1){
               this.head = this.tail = 0
          } else {
               this.tail = temp.prev
               this.tail.next = null;
               temp.prev = null
          }

          this.length--;
          return temp
     }
     shift(){
          if(this.length === 0) return undefined
          
          let oldHead = this.head

          if(this.length === 1){
               this.head = this.tail = null;
          } else {
               this.head = oldHead.next;
               this.head.prev = null;
               oldHead.next = null;
          }
          this.length--;
          return oldHead
     }
     unshift(val){
          let newNode = new Node(val)

          if(this.length === 0) this.head = this.tail = newNode
          else {
               this.head.prev = newNode;
               newNode.next = this.head;
               this.head = newNode 
          }
          this.length++;
          return this
     }
     get(idx){
          if(idx < 0 || idx >= this.length) return null
          if(idx <= this.length / 2){
               var counter = 0;
               var current = this.head;
               current = this.head
               while(counter !== idx){
                    current = current.next
                    counter++
               }
          }else{
               current = this.tail
               counter = this.length - 1;
               while(counter !== idx){
                    current = current.prev;
                    counter--;
               }
          }
          return current
     }
     set(idx, val){
          let res = this.get(idx)
          if(res) {
               res.val = val
               return true
          }else{
               return false
          }
     }
     insert(idx,val){
          if(idx < 0 || idx > this.length) return false
          if(idx === 0) return !!this.unshift(val)
          if(idx === this.length) return !!this.push(val)
          else {
               let res = this.get(idx - 1);
               let newNode = new Node(val);
               let temp = res.next;

               res.next = newNode, newNode.prev = res;
               newNode.next = temp, temp.prev = newNode;

               this.length++;
               return true
          }
     }
     remove(idx){
          if(idx < 0 || idx >= this.length) return undefined;
          if(idx === 0) return this.shift(idx);
          if(idx === this.length - 1) return this.pop(idx);
          else{
               let itemToRemove = this.get(idx)

               itemToRemove.prev.next = itemToRemove.next, itemToRemove.next.prev = itemToRemove.prev;
               itemToRemove.next = null, itemToRemove.prev = null;
               
               this.length--;
               return itemToRemove
          }
     }
     reverse(){
          let node = this.tail;
          this.tail = this.head;
          this.head = node;

          var count = this.length - 1

          while(count >= this.length){
               node.next = node.prev
               count--
          }
          return this
     }
}