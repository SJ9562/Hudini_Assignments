let string="";
for(let i=0;i<5;i++) { 
  for(let j=5;j>i;j--) { 
    string +=j;
  }
  string +="\n";
}
console.log(string);