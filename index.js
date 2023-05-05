function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();
  
    for (let num of arr) {
      let complement = target - num;
      if (seen.has(complement)) {
        pairs.push([num, complement]);
      }
      seen.add(num);
    }
  
    return pairs;
  }

  let arr = [];
  let n = parseInt(prompt("Enter the size of the array:"));
  for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Enter element " + (i+1) + ":"));
    arr.push(num);
  }
  let target = parseInt(prompt("Enter the target sum:"));
  let pairs = findPairs(arr, target);
  console.log(pairs);
  
