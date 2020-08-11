function rec(num){
     if(num <= 0){
          console.log("All Done!");
          return;
     }
     console.log(num);
     num--;
     rec(num)
}

rec(5)