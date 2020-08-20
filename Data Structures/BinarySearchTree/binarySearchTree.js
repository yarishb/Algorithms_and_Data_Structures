class Node {
     constructor(val){
          this.val = val;
          this.left = null;
          this.right = null;
     }
}

class BinarySearchTree {
     constructor(){
          this.root = null
     }

     insert(value){
          let newNode = new Node(value)
          
          if(this.root === null) {
               this.root = newNode
               return this
          }
          else {
               let current = this.root

               while(true){
                    if(current.value === value) return undefined

                    if(!this.root) {
                         this.root = newNode
                         return this
                    }
                    if(value < current.val){
                         if(current.left === null){
                              current.left = newNode
                              return this
                         } else {
                              current = current.left
                         }
                    } else if( value > current.val) {
                         if(current.right === null){
                              current.right = newNode
                              return this
                         } else {
                              current = current.right
                         }
                    }
               }
          }
     }

     find(val){
          if(this.root === null) return false
          let current = this.root;
          let found = false
          while(current && !found){
               if(value < current.val) {
                    current = current.left
               } else if (value > current.val) {
                    current = current.right
               } else {
                    found = true
               }
          }
          if(!found) return false
          return current
     }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
