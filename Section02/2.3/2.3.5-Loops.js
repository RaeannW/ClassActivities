// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let curNum = 100;

// 2) create a variable to represent the current total
let curTot = 0;

// 3) write a while loop that sums the numbers from 1 to 100
let i = 1;

while (i <= curNum) {
  curTot += i;
  i++;
}
console.log(curTot);

while (curTot <= curNum) {
  curTot += curNum;
  curTot++;
}
console.log(curTot);
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; 1 <= curNum; i++) {
  curTot += i;
}
console.log(curTot);
