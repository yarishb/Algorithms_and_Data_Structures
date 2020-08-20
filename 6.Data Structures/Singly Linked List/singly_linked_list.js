// This is a Singly Linked List with his methods
class Node{
     constructor(val){
          this.val = val
          this.next = null;
     }
}

class SinglyLinkedList{
     constructor(){
          this.head = null
          this.tail = null;
          this.length = 0;
     }

     push(val){
          let newNode = new Node(val)

          if(!this.head){
               this.head = newNode
               this.tail = this.head
          }else{
               this.tail.next = newNode
               this.tail = newNode
          }
          this.length++;
          return this
     }
     pop(){
          if(!this.head) return undefined

          let current = this.head
          let newTail = current

          while(current.next){
               newTail = current
               current = current.next
          }

          this.tail = newTail
          this.length--;
          this.tail.next = null;

          if(this.length === 0){
               this.head = null;
               this.tail = null;
          }

          return current
     }
     shift(){
          if(!this.head) return undefined;
          let temp = this.head;
          this.head = temp.next;
          this.length--;
          if(this.length === 0) {
               this.tail = null
          }
          return temp
     }
     unshift(val){
          let newNode = new Node(val)
          if(!this.head){
               this.head = newNode
               this.tail = this.head
          }else{
               newNode.next = this.head
               this.head = newNode
          }
          this.length++;
          return this
     }
     get(idx){
          if(idx < 0 || idx >= this.length) return null;

          var counter = 0
          var current = this.head

          while (counter !== idx) {
               current = current.next
               counter++
          }

          return current
     }
     set(idx, val){
          var gettingRes = this.get(idx)

          if(gettingRes){
               gettingRes.val = val
               return true
          }
     }
     insert(index, val){
          if(index < 0 || index > this.length) return false
          if(index === this.length) return !!this.push(val)
          if(index === 0) return !!this.unshift(val)
          else{
               let newNode = new Node(val)
               let prev = this.get(index - 1)
               let temp = prev.next
               prev.next = newNode
               newNode.next = temp
               this.length++
               return true
          }
     }
     remove(idx){
          if(idx < 0 || idx >= this.length) return undefined
          if(idx === this.length - 1) return this.pop(idx)
          if(idx === 0) return this.shift(idx)
          else{
               let prev = this.get(idx - 1)
               let removed = prev.next
               prev.next = removed.next
               this.length--;
               return removed
          }
     }
     reverse(){
          let node = this.head;
          this.head = this.tail;
          this.tail = node;

          let next;
          let prev = null;

          for(let i = 0; i < this.length; i++){
               next = node.next;
               node.next = prev
               prev = node
               node = next
          }
          return this
     }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")