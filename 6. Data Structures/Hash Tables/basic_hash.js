class HashTable{
     constructor(size = 53){
          this.keyMap = new Array(size)
     }

     set(key, value){
          let index = this.hash(key)
          if(!this.keyMap[index]){
               this.keyMap[index] = []
          } this.keyMap[index].push([key, value])
     }
     get(key){
          let hashed = this.hash(key)
          if(this.keyMap[hashed]){
               for(let i = 0; i< this.keyMap[hashed].length;i++){
                    if(this.keyMap[hashed][i][0] === key){
                         return this.keyMap[hashed][i][1]
                    }
               }
          }
          return undefined
     }

     hash(key){
          let  total = 0,
               WEIRED_PRIME = 31;
          for(let i = 0; i < Math.min(key.length, 100); i++){
               let  char = key[i],
                    value = char.charCodeAt(0) - 96;
               
               total = (total * WEIRED_PRIME + value) % this.keyMap.length 
          }
          return total
     }

     keys(){
         let result = []
         for(let i = 0; i < this.keyMap.length; i++){
             if(this.keyMap[i]){
               for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!result.includes(this.keyMap[i][j][0])){
                        result.push(this.keyMap[i][j][0])
                    }
               }
             }
         }
         return result
     }
     values(){
         let result = []
          for(var i = 0; i < this.keyMap.length; i++){
              if(this.keyMap[i]){
               for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!result.includes(this.keyMap[i][j][1])){
                        result.push(this.keyMap[i][j][1])
                    }
               }
              }
          }
          return result
     }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")