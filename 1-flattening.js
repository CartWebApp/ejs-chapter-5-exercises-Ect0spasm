function reduce(arrays) {
    let current = start; 
      for (let element of arrays) {
      current = combine(arrays);
      }
      return current;
    }
    
    console.log(reduce[1, 2, 3], [4, 5], [6]);

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [6];
let pirater = arr1.concat(arr2, arr3);
console.log(pirater);


// → [1, 2, 3, 4, 5, 6]