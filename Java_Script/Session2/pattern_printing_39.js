for(let i=1;i<9;i++) { 
    let string="";
    for(let j=0;j<2;j++) { 
         if(i%3==0){
                  continue;
                  string += "\n";
                  }
         else{
              string+="$";
             }
  }
console.log(string);
}