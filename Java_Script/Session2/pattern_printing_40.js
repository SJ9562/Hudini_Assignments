let string="";
for(let i=5;i>0;i--) { 
  for(let j=1;j<=i;j++) { 
    string +="*";
  }
  string +="\n";
}
console.log(string);

for(let i=1;i<=5;i++) {
  for(let j=0;j<i;j++) {
    string +="*";
  }
  string +="\n";
}
console.log(string);