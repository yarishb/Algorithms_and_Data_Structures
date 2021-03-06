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
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          var current = this.root;
          while(true){
              if(value === current.val) return undefined;
              if(value < current.val){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } 
                  current = current.right;
              }
          }
      }

     find(value){
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
     bfs(){
          let node = this.root,
              data = [],
              queue = [];
          
          queue.push(node)

          while(queue.length){
               node = queue.shift()
               data.push(node.val)
               if(node.left) queue.push(node.left)
               if(node.right) queue.push(node.right)
          }
          return data
      }
      dfs(){
          let visited = [],
              current = this.root;
          function helper(node){
               visited.push(node.val);
               if(node.left) helper(node.left)
               if(node.right) helper(node.right)    
          }
          helper(current)
          return visited
      }
      dfs_post_order(){
           let visited = [],
               current = this.root;
          
          function helper(node){
               if(node.left) helper(node.left)
               if(node.right) helper(node.right)
               visited.push(node.val)
          }
          helper(current)
          return visited
      }
      dfs_in_order(){
           let visited = [],
               current = this.root;

          function helper(node){
               if(node.left) helper(node.left)
               visited.push(node.val)
               if(node.right) helper(node.right)
          }
          helper(current)
          return visited
      }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.bfs();