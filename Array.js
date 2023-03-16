//Exercise #1

let waiting = ['Sofia', 'David', 'Juan']

waiting.push('Sara', 'Augustin');
console.log(waiting);

waiting.splice(2, 0, 'Renata')
waiting.push('Elena')
console.log(waiting);


//Exercise #2
for (let i=1; i<=5 ; i++){
    let x = ""
    for(let n=1 ;n <= i ; n++){
      x += "*"
    }
  console.log(x)
  }  




//Exercise #3

for (let x = 20; x > 0; x-=0.5) {
    console.log(x);
   }

//odd Number
for (let i = 1; i < 100; i+=2) {
    console.log(i);
   }


// [n]
{
let n = 6
let i = 1
while (i <= n) {
    console.log([i]);
    i++;
}
}

//sum

const n = 19
let i = 1
let sum = 0

while (i <= n) {
    sum = sum+i;
    i++;
    if(i===n+1) {console.log(sum);}
}